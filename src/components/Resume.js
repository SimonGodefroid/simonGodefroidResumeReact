import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PieChartSkills from "../components/PieChartSkills";
import Experience from "./Experience";

const GERoles = [
  {
    date: "03/2012 - 01/2013",
    title: "Financial Planning Analyst",
    missions: [
      "- Participation aux clôtures, sessions budgétaires et présentations des KPIs",
      "- En charge du lancement du nouvel ERP et de la formation des utilisateurs"
    ]
  },
  {
    date: "06/2010 - 08/2011",
    title: "Credit Risk Analyst",
    missions: [
      "- Analyse du risque crédit, analyse des comptes de résultat et bilans, cas de fraudes",
      "- Analyse de la relation apporteur et revue des encours sur les 10 plus gros partenaires"
    ]
  }
];

const ZALORARoles = [
  {
    date: "09/2013 - 06/2015",
    title: "Regional Business Development Manager - Singapore",
    missions: [
      "- Direction du projet “disruptif” Branded Marketplace dans 7 pays représentant 40% des revenus et 80% de l'assortiment",
      "- Direction du projet d’intégration via API avec un agrégateur Coréen en International Dropshipping",
      "- Présentation aux dirigeants et aux responsables opérationnels"
    ]
  },
  {
    date: "",
    title: "Regional Project Manager - Singapore",
    missions: [
      "- Chargé du lancement de la plateforme de Marketplace Seller Center pour 7 pays",
      "- Responsable de la formation des directeurs de marchés sur la plateforme Seller Center",
      "- Chargé de produit sur la plateforme de Marketplace Seller Center",
      "- Suivi de l'integration de Seller Center avec les équipes en Allemagne et au Portugal dans les 7 pays de la région"
    ]
  },
  {
    date: "",
    title: "Entrepreneur In Residence - Kuala Lumpur",
    missions: [
      "- Appointé au PDG pour l’étude de marché pour le lancement de la Business Unit Marketplace",
      "- Etude du paysage concurrentiel et l’apprentissage des opérations de E-Commerce",
      "- Montée en compétence in-vivo sur la Plateforme Seller Center et les opérations du Ecommerce"
    ]
  }
];

const LEREACTEURRoles = [
  {
    date: "04/2017 - Aujourd'hui",
    title: "Fondateur de Moveet",
    missions: [
      "- Developpement de mon MVP en React Native",
      "- Création de slides pour la communication",
      "- Recrutement de collaborateurs pour le projet"
    ]
  },
  {
    date: "01/2017 - 04/2017",
    title: "Formation Developpeur ReactJS / React Native",
    missions: [
      "- Suivi d’une formation de 3 mois en développement (JavaScript, React, React Native",
      "- Réalisation d’un projet de fin de formation en 2 semaines et d’un Projet",
      "- Gestion du Projet de fin de formation"
    ]
  }
];

export default class Resume extends React.Component {
  handleSelect(index, last) {
    console.log("Selected tab: " + index + ", Last tab: " + last);
  }
  render() {
    return (
      <Tabs onSelect={this.handleSelected}>
        <TabList style={{ textAlign: "center" }}>
          <Tab>Finance</Tab>
          <Tab>Project Management / Business Development</Tab>
          <Tab>Development</Tab>
        </TabList>
        {/* GE PANEL*/}
        <TabPanel>
          <Experience
            logo={"./assets/img/ge_logo.png"}
            logoAlt={"Logo General Electric"}
            employer={"General Electric - Capital Solutions"}
            roles={GERoles}
          />
          <PieChartSkills dataSource={"ge"} />
        </TabPanel>
        {/* ROCKET INTERNET PANEL*/}
        <TabPanel>
          <Experience
            logo={"./assets/img/rocket_logo.png"}
            logoAlt={"Logo Rocket Internet"}
            employer={"Rocket Internet - ZALORA SEA"}
            roles={ZALORARoles}
          />
          <PieChartSkills
            dataSource={"zalora"}
            radarStroke={"black"}
            radarFill={"red"}
            radarFillOpacity={0.3}
          />
        </TabPanel>
        {/* LE REACTEUR PANEL*/}
        <TabPanel>
          <Experience
            logo={"./assets/img/lereacteur_logo.png"}
            logoAlt={"Logo Le Reacteur"}
            employer={"Le Reacteur, Moveet, Side Projects"}
            roles={LEREACTEURRoles}
          />
          <PieChartSkills dataSource={"reacteur"} />
        </TabPanel>
      </Tabs>
    );
  }
}
