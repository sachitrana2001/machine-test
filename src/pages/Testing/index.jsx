import React from "react";
import "./style.css";
import TextField from "@/components/ui/input";

const index = () => {
  const helpertext = "helpertext";
  const testingLable = "testing lable";
  return (
    <div className="testing-container">
      <h1>Testing</h1>
      <TextField
        type={"text"}
        helpertext={"this field for testing"}
        isRequired={true}
        key={"673628721"}
        labelName={"Testing"}
        name={"test"}
        placeholder={"Enter Test"}
        suffix={"tx"}
      />
      {/*   <TextAreaField
        helpertext={"this field for testing"}
        isRequired={true}
        key={"673628721"}
        labelName={"Testing text area"}
        name={"test"}
        placeholder={"Enter Test"}
        suffix={"tx"}
/>*/}
      {/*<SelectField
        helpertext={helpertext}
        labelName={testingLable}
        options={[
          { option: "select 1", id: "" },
          { option: "select 2", id: "" },
          { option: "select 3", id: "" },
        ]}
        placeholder={"select values"}
    />*/}
    </div>
  );
};

export default index;
