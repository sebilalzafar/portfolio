const personDetails = {
    personal: {
      firstName: "Bilal",
      lastName: "Zafar",
      email: "sebilalzafar@gmail.com",
      age: 20,
      languages: " English & Urdu",
      phone: "Will be Available soon 😉",
      contactMail: "sebilalzafar@gmail.com",
      address: "Okara, Pakistan",
      nationality: "Pakistani",
      freelance: "Will be Available soon 😉",
      description: "I have been working with Django Python for the past two years, and during that time, I have gained a deep understanding of the framework's inner workings and best practices. I have developed numerous web applications using Django, ranging from simple blogs to complex e-commerce platforms. I am proficient in building custom models, forms, and views, and have experience integrating third-party libraries and APIs. I have also worked with various databases such as SQLite, PostgreSQL, and MySQL and have experience deploying applications to various hosting platforms such as Cpanel and AWS."
    },
    professional: {
      yoe: 2,
      completedProjects: 10,
      happyCustomers: 10,
      awardsWon: 3,
    },
    academic: {
      college: {
        name: "Virtual University",
        duration: "2021-2024(expected)",
        course: "",
      },
      school: {
        name: "District Public School",
        duration: "2016-2018",
        course: "High School"
      }
    },
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 95,
      "javascript": 50,
      "css": 100,
      "nodejs": 20,
      "wordpress": 0,
      "python": 95,
      "gitAndGithub": 70,
      "vscode": 90,
      },
    social: {
      github: "https://github.com/sebilalzafar",
      linkedin: "https://www.linkedin.com/in/sebilalzafar/",
      codepen: "#",
      telegram: "#"
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('nodejs');
  setSkillValue('wordpress');
  setSkillValue('gitAndGithub');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('codepen', personDetails.social.codepen, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');