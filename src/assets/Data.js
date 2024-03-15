import aero from "./images/departments/aero.png";
import agri from "./images/departments/agri.png";
import datascience from "./images/departments/datascience.png";
import machine from "./images/departments/machine-learning.png";
import automobile from "./images/departments/automobile.png";
import biomedical from "./images/departments/biomedical.png";
import biotech from "./images/departments/biotech.png";
import civil from "./images/departments/civil.png";
import csbs from "./images/departments/csbs.png";
import csd from "./images/departments/csd.png";
import cs from "./images/departments/cs.png";
import ct from "./images/departments/ct.png";
import eee from "./images/departments/eee.png";
import ece from "./images/departments/ece.png";
import fasion from "./images/departments/fasion.png";
import foodtech from "./images/departments/foodtech.png";
import ise from "./images/departments/ise.png";
import it from "./images/departments/it.png";
import mechatronincs from "./images/departments/mechatronics.png";
import mechanical from "./images/departments/mechanical.png";
import eie from "./images/departments/eie.png";
import textile from "./images/departments/textile.png";

import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";

import register from "./images/register.png";
import completed from "./images/completed.png";
import missed from "./images/missed.png";
export const EvenData = [
  {
    id: 1,
    year: "I YEAR",
    img: one,
    dept: [
      {
        name: "AGRICULTURAL ENGINEERING",
        img: agri,
        year: "I year",
        sheet: [
          {
            card: "SLOT BOOKING",
            img: register,
            link:"/register/course",
            links: [
              {
                subject: "BASICS OF ELECTRONICS ENGINEERING",
                link: "",
              },
              {
                subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
                link: "",
              },
              {
                subject: "ENGINEERING CHEMISTRY II",
                link: "",
              },
            ],
          },
          { card: "COMPLETION STATUS", img: completed, link: "https://docs.google.com/spreadsheets/d/1hEUzVPK0E00I0hIQpWWer7Mysc2_tJFwpiTOJoNi6LI/edit#gid=1584362692" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        year: "I year",
        img: datascience,
        sheet: [
          {
            card: "SLOT BOOKING",
            link:"/register/course",
            img: register,
            links: [
              {
                subject: "BASICS OF ELECTRICAL ENGINEERING",
                link: "",
              },
              {
                subject: "DIGITAL COMPUTER ELECTRONICS",
                link: "",
              },
              {
                subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
                link: "",
              },
              {
                subject: "ENGINEERING CHEMISTRY II",
                link: "",
              },
            ],
          },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICAL INTELLIGENCE AND MACHINE LEARNING",
        year: "I year",
        img: machine,
        sheet: [
          {
            card: "SLOT BOOKING",
            img: register,
            link:"/register/course",
            links: [
              {
                subject: "BASICS OF ELECTRICAL ENGINEERING",
                link: "",

              },
              {
                subject: "DIGITAL COMPUTER ELECTRONICS ",
                link: "",
              },
              {
                subject: "ELECTROMAGNETISM AND MODERN PHYSICS ",
                link: "",
              },
              {
                subject: "ENGINEERING CHEMISTRY II",
                link: "",
              },
            ],
          },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOMEDICAL ENGINEERING",
        year: "I year",
        img: biomedical,
        sheet: [
          {
            card: "SLOT BOOKING",
            img: register,
            link:"/register/course",
            links: [
              {
                subject: "BASICS OF ELECTRONICS ENGINEERING",
                link: "",
              },
              {
                subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
                link: "",
              },
              {
                subject: "ENGINEERING CHEMISTRY II",
                link: "",
              },
            ],
          },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOTECHNOLOGY",
        year: "I year",
        img: biotech,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "CIVIL ENGINEERING",
        year: "I year",
        img: civil,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        year: "I year",
        img: csbs,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "DATA STRUCTURES",
              link: "",
            },
            {
              subject: "PRINCIPLES OF ELECTRONICS",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND DESIGN",
        year: "I year",
        img: csd,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRICAL ENGINEERING",
              link: "",
            },
            {
              subject: "DIGITAL COMPUTER ELECTRONICS",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        year: "I year",
        img: cs,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRICAL ENGINEERING",
              link: "",
            },
            {
              subject: "DIGITAL COMPUTER ELECTRONICS",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER TECHNOLOGY",
        year: "I year",
        img: ct,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRICAL ENGINEERING",
              link: "",
            },
            {
              subject: "DIGITAL COMPUTER ELECTRONICS",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed,  link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        year: "I year",
        img: eee,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND COMMUNICATION ENGINEERING",
        year: "I year",
        img: ece,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        year: "I year",
        img: eie,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },

      {
        name: "FASION TECHNOLOGY",
        year: "I year",
        img: fasion,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FOOD TECHNOLOGY",
        year: "I year",
        img: foodtech,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION SCIENCE AND ENGINEERING",
        year: "I year",
        img: ise,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRICAL ENGINEERING",
              link: "",
            },
            {
              subject: "DIGITAL COMPUTER ELECTRONICS",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION TECHNOLOGY",
        year: "I year",
        img: it,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRICAL ENGINEERING",
              link: "",
            },
            {
              subject: "DIGITAL COMPUTER ELECTRONICS",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHATRONICS ENGINEERING",
        year: "I year",
        img: mechatronincs,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHANICAL ENGINEERING",
        year: "I year",
        img: mechanical,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [
            {
              subject: "BASICS OF ELECTRONICS ENGINEERING",
              link: "",
            },
            {
              subject: "ELECTROMAGNETISM AND MODERN PHYSICS",
              link: "",
            },
            {
              subject: "ENGINEERING CHEMISTRY II",
              link: "",
            },
          ] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    year: "II YEAR",
    img: two,
    dept: [
      {
        name: "AERONAUTICAL ENGINEERING",
        img: aero,
        year: "II year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "AGRICULTURAL ENGINEERING",
        img: agri,
        year: "II year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        year: "II year",
        img: datascience,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICAL INTELLIGENCE AND MACHINE LEARNING",
        year: "II year",
        img: machine,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOMEDICAL ENGINEERING",
        year: "II year",
        img: biomedical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOTECHNOLOGY",
        year: "II year",
        img: biotech,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "CIVIL ENGINEERING",
        year: "II year",
        img: civil,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        year: "II year",
        img: csbs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND DESIGN",
        year: "II year",
        img: csd,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        year: "II year",
        img: cs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER TECHNOLOGY",
        year: "II year",
        img: ct,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        year: "II year",
        img: eee,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND COMMUNICATION ENGINEERING",
        year: "II year",
        img: ece,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FASION TECHNOLOGY",
        year: "II year",
        img: fasion,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FOOD TECHNOLOGY",
        year: "II year",
        img: foodtech,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION SCIENCE AND ENGINEERING",
        year: "II year",
        img: ise,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION TECHNOLOGY",
        year: "II year",
        img: it,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHATRONICS ENGINEERING",
        year: "II year",
        img: mechatronincs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHANICAL ENGINEERING",
        year: "II year",
        img: mechanical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        year: "II year",
        img: eie,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },

      {
        name: "TEXTILE TECHNOLOGY",
        year: "II year",
        img: textile,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
    ],
  },
  {
    id: 3,
    year: "III YEAR",
    img: three,
    dept: [
      {
        name: "AERONAUTICAL ENGINEERING",
        img: aero,
        year: "III year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "AUTOMOBILE ENGINEERING",
        year: "III year",
        img: automobile,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "AGRICULTURAL ENGINEERING",
        img: agri,
        year: "III year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        year: "III year",
        img: datascience,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICAL INTELLIGENCE AND MACHINE LEARNING",
        year: "III year",
        img: machine,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOMEDICAL ENGINEERING",
        year: "III year",
        img: biomedical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOTECHNOLOGY",
        year: "III year",
        img: biotech,
        sheet: ["COMPLETED", "MISSED"],
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "CIVIL ENGINEERING",
        year: "III year",
        img: civil,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        year: "III year",
        img: csbs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND DESIGN",
        year: "III year",
        img: csd,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        year: "III year",
        img: cs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER TECHNOLOGY",
        year: "III year",
        img: ct,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        year: "III year",
        img: eee,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND COMMUNICATION ENGINEERING",
        year: "III year",
        img: ece,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FASION TECHNOLOGY",
        year: "III year",
        img: fasion,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FOOD TECHNOLOGY",
        year: "III year",
        img: foodtech,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION SCIENCE AND ENGINEERING",
        year: "III year",
        img: ise,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION TECHNOLOGY",
        year: "III year",
        img: it,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHATRONICS ENGINEERING",
        year: "III year",
        img: mechatronincs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHANICAL ENGINEERING",
        year: "III year",
        img: mechanical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        year: "III year",
        img: eie,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },

      {
        name: "TEXTILE TECHNOLOGY",
        year: "III year",
        img: textile,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
    ],
  },
];

export const oddData = [
  {
    id: 1,
    year: "I YEAR",
    img: one,
    dept: [
      {
        name: "AGRICULTURAL ENGINEERING",
        img: agri,
        year: "I year",
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        year: "I year",
        img: datascience,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course",links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICAL INTELLIGENCE AND MACHINE LEARNING",
        year: "I year",
        img: machine,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOMEDICAL ENGINEERING",
        year: "I year",
        img: biomedical,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOTECHNOLOGY",
        year: "I year",
        img: biotech,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "CIVIL ENGINEERING",
        year: "I year",
        img: civil,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        year: "I year",
        img: csbs,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND DESIGN",
        year: "I year",
        img: csd,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        year: "I year",
        img: cs,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER TECHNOLOGY",
        year: "I year",
        img: ct,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        year: "I year",
        img: eee,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND COMMUNICATION ENGINEERING",
        year: "I year",
        img: ece,
        sheet: [
          { card: "SLOT BOOKING", img: register,link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FASION TECHNOLOGY",
        year: "I year",
        img: fasion,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FOOD TECHNOLOGY",
        year: "I year",
        img: foodtech,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION SCIENCE AND ENGINEERING",
        year: "I year",
        img: ise,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION TECHNOLOGY",
        year: "I year",
        img: it,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHATRONICS ENGINEERING",
        year: "I year",
        img: mechatronincs,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHANICAL ENGINEERING",
        year: "I year",
        img: mechanical,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        year: "I year",
        img: eie,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },

      {
        name: "TEXTILE TECHNOLOGY",
        year: "I year",
        img: textile,
        sheet: [
          { card: "SLOT BOOKING", img: register, link:"/register/course", links: [{}] },
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    year: "II YEAR",
    img: two,
    dept: [
      {
        name: "AERONAUTICAL ENGINEERING",
        img: aero,
        year: "II year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "AGRICULTURAL ENGINEERING",
        img: agri,
        year: "II year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        year: "II year",
        img: datascience,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICAL INTELLIGENCE AND MACHINE LEARNING",
        year: "II year",
        img: machine,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOMEDICAL ENGINEERING",
        year: "II year",
        img: biomedical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOTECHNOLOGY",
        year: "II year",
        img: biotech,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "CIVIL ENGINEERING",
        year: "II year",
        img: civil,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        year: "II year",
        img: csbs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND DESIGN",
        year: "II year",
        img: csd,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        year: "II year",
        img: cs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER TECHNOLOGY",
        year: "II year",
        img: ct,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        year: "II year",
        img: eee,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND COMMUNICATION ENGINEERING",
        year: "II year",
        img: ece,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FASION TECHNOLOGY",
        year: "II year",
        img: fasion,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FOOD TECHNOLOGY",
        year: "II year",
        img: foodtech,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION SCIENCE AND ENGINEERING",
        year: "II year",
        img: ise,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION TECHNOLOGY",
        year: "II year",
        img: it,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHATRONICS ENGINEERING",
        year: "II year",
        img: mechatronincs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHANICAL ENGINEERING",
        year: "II year",
        img: mechanical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        year: "II year",
        img: eie,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },

      {
        name: "TEXTILE TECHNOLOGY",
        year: "II year",
        img: textile,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
    ],
  },
  {
    id: 3,
    year: "III YEAR",
    img: three,
    dept: [
      {
        name: "AERONAUTICAL ENGINEERING",
        img: aero,
        year: "III year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "AGRICULTURAL ENGINEERING",
        img: agri,
        year: "III year",
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
        year: "III year",
        img: datascience,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ARTIFICAL INTELLIGENCE AND MACHINE LEARNING",
        year: "III year",
        img: machine,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "AUTOMOBILE ENGINEERING",
        year: "III year",
        img: automobile,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOMEDICAL ENGINEERING",
        year: "III year",
        img: biomedical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "BIOTECHNOLOGY",
        year: "III year",
        img: biotech,
        sheet: ["COMPLETED", "MISSED"],
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "CIVIL ENGINEERING",
        year: "III year",
        img: civil,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND BUSINESS SYSTEMS",
        year: "III year",
        img: csbs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND DESIGN",
        year: "III year",
        img: csd,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        year: "III year",
        img: cs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "COMPUTER TECHNOLOGY",
        year: "III year",
        img: ct,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
        year: "III year",
        img: eee,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRICAL AND COMMUNICATION ENGINEERING",
        year: "III year",
        img: ece,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FASION TECHNOLOGY",
        year: "III year",
        img: fasion,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "FOOD TECHNOLOGY",
        year: "III year",
        img: foodtech,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION SCIENCE AND ENGINEERING",
        year: "III year",
        img: ise,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "INFORMATION TECHNOLOGY",
        year: "III year",
        img: it,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHATRONICS ENGINEERING",
        year: "III year",
        img: mechatronincs,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "MECHANICAL ENGINEERING",
        year: "III year",
        img: mechanical,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
      {
        name: "ELECTRONICS AND INSTRUMENTATION ENGINEERING",
        year: "III year",
        img: eie,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },

      {
        name: "TEXTILE TECHNOLOGY",
        year: "III year",
        img: textile,
        sheet: [
          { card: "COMPLETION STATUS", img: completed, link: "" },
          { card: "MISSED SLOT", img: missed, link: "" },
        ],
      },
    ],
  },
];
