import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  VALID_CREDENTIALS,
  VALIDATION_RULES,
  API_ENDPOINTS,
  ROUTES,
} from "../constants";
import type { ResponseUser, User, FormData, FormErrors } from "../types";
import { useDataUser } from "../hooks";
import { ArrowCollapse } from "../assets";

const classes = {
  form: "form",
  inputsWrapper: "form__inputs-wrapper",
  documentGroup: "form__document-group",
  documentWrapper: "form__document-wrapper",
  selectWrapper: "form__select-wrapper",
  select: "form__select",
  inputWrapper: "form__input-wrapper",
  input: "form__input",
  inputError: "form__input--error",
  label: "form__label",
  phoneGroup: "form__phone-group",
  phoneWrapper: "form__phone-wrapper",
  phoneInput: "form__phone-input",
  phoneLabel: "form__phone-label",
  checkboxGroup: "form__checkbox-group",
  checkboxLabel: "form__checkbox-label",
  checkboxLabelError: "form__checkbox-label--error",
  terms: "form__terms",
  error: "form__error",
  button: "form__button",
  buttonLoading: "form__button--loading",
};

const Form = () => {
  const navigate = useNavigate();
  const { setUser } = useDataUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    document: "DNI",
    numberDocument: "",
    phone: "",
    privacyPolity: false,
    comunicationPolity: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name === "privacyPolity" || name === "comunicationPolity") {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.checkboxes;
        delete newErrors.general;
        return newErrors;
      });
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        delete newErrors.general;
        return newErrors;
      });
    }

    if (name === "numberDocument" || name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.numberDocument) {
      newErrors.numberDocument = "*El número de documento es obligatorio";
    } else if (formData.numberDocument.length !== VALIDATION_RULES.DNI_LENGTH) {
      newErrors.numberDocument = `*El DNI debe tener ${VALIDATION_RULES.DNI_LENGTH} dígitos`;
    }

    if (!formData.phone) {
      newErrors.phone = "*El celular es obligatorio";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "*El celular debe tener al menos 10 dígitos";
    }

    if (!formData.privacyPolity || !formData.comunicationPolity) {
      newErrors.checkboxes = "*Debes aceptar ambas políticas para continuar";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    setIsLoading(true);

    try {
      if (
        formData.numberDocument !== VALID_CREDENTIALS.DNI ||
        formData.phone !== VALID_CREDENTIALS.PHONE
      ) {
        setErrors({
          general: "*El usuario no existe",
        });
        setIsLoading(false);
        return;
      }
      const { data } = await axios.get<ResponseUser>(API_ENDPOINTS.USER);

      const dataUser: User = {
        name: data?.name,
        lastName: data?.lastName,
        birthday: data?.birthDay,
        dni: formData?.numberDocument,
        phone: formData?.phone,
        plan: "",
        price: 0,
      };
      setUser(dataUser);
      setIsLoading(false);
      navigate(ROUTES.PLANS);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrors({
        general: "*Ocurrió un error al procesar la solicitud.",
      });
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.inputsWrapper}>
        <div className={classes.documentGroup}>
          {errors.general && (
            <span className={classes.error}>{errors.general}</span>
          )}
          <div className={classes.documentWrapper}>
            <div className={classes.selectWrapper}>
              <select
                name="document"
                id="document"
                value={formData.document}
                onChange={handleChange}
                className={classes.select}
                aria-label="Tipo de documento"
              >
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
              </select>
              <img src={ArrowCollapse} alt="Arrow down" />
            </div>
            <div className={classes.inputWrapper}>
              <input
                type="text"
                name="numberDocument"
                id="numberDocument"
                placeholder=" "
                value={formData.numberDocument}
                onChange={handleChange}
                className={`${classes.input} ${
                  errors.numberDocument ? classes.inputError : ""
                }`}
                maxLength={VALIDATION_RULES.DNI_LENGTH}
              />
              <label htmlFor="numberDocument" className={classes.label}>
                Nro. de Documento
              </label>
            </div>
          </div>
          {errors.numberDocument && (
            <span className={classes.error}>{errors.numberDocument}</span>
          )}
        </div>
        <div className={classes.phoneGroup}>
          <div className={classes.phoneWrapper}>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
              className={`${classes.phoneInput} ${
                errors.phone ? classes.inputError : ""
              }`}
              maxLength={VALIDATION_RULES.PHONE_LENGTH}
            />
            <label htmlFor="phone" className={classes.phoneLabel}>
              Celular
            </label>
          </div>
          {errors.phone && (
            <span className={classes.error}>{errors.phone}</span>
          )}
        </div>
      </div>
      <div className={classes.checkboxGroup}>
        <label
          className={`${classes.checkboxLabel} ${
            errors.checkboxes && !formData.privacyPolity
              ? classes.checkboxLabelError
              : ""
          }`}
        >
          <input
            type="checkbox"
            name="privacyPolity"
            checked={formData.privacyPolity}
            onChange={handleChange}
          />
          Acepto la Política de Privacidad
        </label>
        <label
          className={`${classes.checkboxLabel} ${
            errors.checkboxes && !formData.comunicationPolity
              ? classes.checkboxLabelError
              : ""
          }`}
        >
          <input
            type="checkbox"
            name="comunicationPolity"
            checked={formData.comunicationPolity}
            onChange={handleChange}
          />
          Acepto la Política de Comunicaciones Comerciales
        </label>
        <a href="/plans" className={classes.terms}>
          Aplican Términos y Condiciones.
        </a>
      </div>

      <button
        type="submit"
        className={`${classes.button} ${
          isLoading ? classes.buttonLoading : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Cotizando..." : "Cotiza aquí"}
        {isLoading && <div className="spinner-loading" />}
      </button>
    </form>
  );
};

export default React.memo(Form);
