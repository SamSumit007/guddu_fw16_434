import { useState } from "react";
// import "./styles.css";
import {
  Anch,
  AppStyled,
  BoldLabel,
  FormWrapper,
} from "./StyledComponent.styled";

export default function App() {
  const [color, setColor] = useState("red");
  return (
    <AppStyled>
      <FormWrapper color={color}>
        <div>
          <label>ColorName : </label>
          <input
            placeholder="enter colorName"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br />
          <br />
          <br />
          <div>
            <Anch href="http://www.google.com" target="_blank" color={color}>
              Text hello
            </Anch>
          </div>
        </div>
      </FormWrapper>
    </AppStyled>
  );
}
