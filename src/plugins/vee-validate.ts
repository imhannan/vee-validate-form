import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import {
  required,
  email,
  alpha_spaces,
  alpha_dash,
  numeric,
  min,
  max,
  confirmed,
} from "@vee-validate/rules";
export default (app) => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("alpha_spaces", alpha_spaces);
  defineRule("alpha_dash", alpha_dash);
  defineRule("numeric", numeric);
  defineRule("min", min);
  defineRule("max", max);
  defineRule("confirmed", confirmed);

  defineRule("address", (value) => {
    const regex = new RegExp(/^([a-z,: ])([a-z,\n :])+([a-z, :])$/gi);
    if (regex.test(value)) {
      return true;
    }
    return "address is not furnished";
  });

  app.component("VForm", Form);
  app.component("VField", Field);
  app.component("VErrorMessage", ErrorMessage);
};
