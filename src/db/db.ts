import { SemestersProps } from "../config/interfaces-templates";

const semestersDb: SemestersProps = {
  semesters: [
    {
      semester: 5,
      courses: [
        {
          cod: "ECIN-00515",
          name: "Inteligencia Artificial",
          credit: 5,
          semester: 5,
          approved: true
        },
        {
          cod: "ECIN-00516",
          name: "Desarrollo de Aplicaciones Distribuidas I",
          credit: 5,
          semester: 5,
          approved: true
        },
        {
          cod: "ECIN-00518",
          name: "Proyecto Integrador Plataformas TI",
          credit: 5,
          semester: 5,
          approved: true
        },
        {
          cod: "ELEITI-0002",
          name: "Electivo II",
          credit: 5,
          semester: 6,
          approved: true
        }
      ]
    },
    {
      semester: 6,
      courses: [
        {
          cod: "ECIN-00617",
          name: "Desarrollo de Aplicaciones Distribuidas II",
          credit: 5,
          semester: 6,
          approved: true
        },
        {
          cod: "PIEITI-0001",
          name: "Proyecto Integrador Especialidad I",
          credit: 5,
          semester: 6,
          approved: true
        },
        {
          cod: "ECIN-00715",
          name: "Ingeniería Económica",
          credit: 5,
          semester: 7,
          approved: true
        },
        {
          cod: "ECIN-00716",
          name: "Ingeniería de Datos II",
          credit: 5,
          semester: 7,
          approved: true
        },
        {
          cod: "ELEITI-003",
          name: "Electivo III",
          credit: 5,
          semester: 7,
          approved: true
        }
      ]
    },
    {
      semester: 7,
      courses: [
        {
          cod: "ELEITI-004",
          name: "Electivo IV",
          credit: 5,
          semester: 7,
          approved: true
        },
        {
          cod: "ECIN-00717",
          name: "Gestión de la Seguridad de la Información",
          credit: 5,
          semester: 7,
          approved: true
        },
        {
          cod: "PIEITI-0002",
          name: "Proyecto Integrador Especialidad II",
          credit: 5,
          semester: 7,
          approved: true
        }
      ]
    },
    {
      semester: 8,
      courses: [
        {
          cod: "ECIN-00815",
          name: "Capstone Project Especialidad",
          credit: 30,
          semester: 8,
          approved: true
        }
      ]
    },
    {
      semester: 9,
      courses: [
        {
          cod: "ECIN-00815",
          name: "Capstone Project Especialidad",
          credit: 30,
          semester: 8,
          approved: true
        }
      ]
    },
    {
      semester: 10,
      courses: [
        {
          cod: "ECIN-00815",
          name: "Capstone Project Especialidad",
          credit: 30,
          semester: 8,
          approved: true
        }
      ]
    }
  ]
}

export default semestersDb