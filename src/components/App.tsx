interface RegistrationForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
}

type ValidationResult = {
  isValid: boolean
  message: string
}

function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email)
  return {
    isValid,
    message: isValid ? "success" : "error"
  }
}

function validatePassword(password: string): ValidationResult {
  if (password.length < 8) {
    return {
      isValid: false,
      message: "Must have at least 8 characters"
    }
  } else if (password.length > 20) {
    return {
      isValid: false,
      message: "Must have maximum 20 characters"
    }
  } else {
    return {
      isValid: true,
      message: "success"
    }
  }
}

function validateConfirmPassword(confirmPassword: string, password: RegistrationForm["password"]): ValidationResult {
  const isValid = confirmPassword === password
  return {
    isValid,
    message: isValid ? "success" : "Passwords must match"
  }
}

function handleRegister(formData: RegistrationForm): ValidationResult[] {
  const emailResult = validateEmail(formData.email)
  const passwordResult  = validatePassword(formData.password)
  const confirmResult  = validateConfirmPassword(formData.password, formData.confirmPassword)
  return [emailResult, passwordResult, confirmResult]
}

type ValidatedForm = RegistrationForm & {isValidated: true}
type ValidationError<T> = T extends string ? {field: T; error: string} : never;
type FormErrors = Partial<Record<keyof RegistrationForm, string>>

export default function App() {
  return <div style={{
    display: "flex",
    placeContent: "center"
  }}>
    <form style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      width: "350px",

    }} onSubmit={() => handleRegister}>
      <label style={{
        display: "flex",
        flexDirection: "column",
      }}>Username
        <input type="text"/>
      </label>
      <label style={{
        display: "flex",
        flexDirection: "column",
      }}>Email
        <input type="email"/>
      </label>
      <label style={{
        display: "flex",
        flexDirection: "column",
      }}>Password
        <input type="password"/>
      </label>
      <label>Confirm Password
        <input type="password"/>
      </label>
      <label style={{
        display: "flex",
        flexDirection: "column",
      }}>Age<span>(optional)</span>
        <input type="number"/>
      </label>
      <button type="submit">Register</button>
    </form>
  </div>
}