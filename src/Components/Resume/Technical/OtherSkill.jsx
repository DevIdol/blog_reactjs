import React from "react";
import { getOtherSkillData } from "./OtherSkillData";
import "./OtherSkill.css";

const OtherSkill = () => {
  const otherskill = getOtherSkillData();
  return (
    <div className="container">
      <div className="row ">
        {otherskill.map((data) => {
          return (
            <div key={data.id} className="col-md-6">
              <h4 className="skill-title">{data.title}</h4>

              {data.skill.map((type) => {
                return (
                  <div className="skill-content" key={type.id}>
                    <div>
                      <span className="skill-icon">{type.icon}</span>
                    </div>
                    <h6 className="skill-type">{type.type}</h6>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherSkill;
