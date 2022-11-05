import dataSkills from "../../data/dataLeftSide/dataSkills";
import dataSoftSkills from "../../data/dataLeftSide/dataSoftSkliis";
import dataHobbys from "../../data/dataLeftSide/dataHobbys";

export const contact = {
  title: "KONTAKT",
  phoneNr: "+48 516 145 031",
  city: "Bielsko-Biała",
  email: "orwat.ania@gmail.com",
};

export const gitHub ={
    page: "GITHUB.COM",
    name: "ANIAORWATK",
}

export const skills = dataSkills.data.map((item) => {
  return <li className="leftSide__li" key={item.skill}>{item.skill}</li>;
});

export const softSkills = dataSoftSkills.data.map((item) => {
  return <li className="leftSide__li" key={item.soft_skill}>{item.soft_skill}</li>;
});

export const hobbys = dataHobbys.data.map((item) => {
  return <li className="leftSide__li" key={item.hobby}>{item.hobby}</li>;
});
