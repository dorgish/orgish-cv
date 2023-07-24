import React from 'react';

import Avatar from '../../img/1.png';
import MailIcon from '../../svg/mail.svg';
import PhoneIcon from '../../svg/phon_e.svg';
import TelegramIcon from '../../svg/telega.svg';
import GitIcon from '../../svg/git.svg';
import LinkedIn from '../../svg/linkedIn_.svg';
import styles from './About.module.css';

const About = () => {
  return (
    <React.Fragment>
      <div className={styles.aboutWrapper}>
        <section className={styles.mainInfo}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
          <h1 className={styles.name}>DMITRY ORGISH</h1>
          <h2 className={styles.position}>REACT FRONT-END DEVELOPER</h2>
        </section>
        <section className={styles.mainInfo}>
          <h3 className={styles.contactsTitle}>HOW TO CONTACT ME:</h3>
          <ul className={styles.contacts}>
            <li className={styles.contactItem}>
              <img src={MailIcon} alt="icon" />
              <a
                href="malito:dmytro.orgish88@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                dmytro.orgish88@gmail.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <img src={PhoneIcon} alt="icon" />
              <a href="tel:+380665738771" target="_blank" rel="noreferrer">
                +38 066 573 87 71
              </a>{' '}
            </li>
            <li className={styles.contactItem}>
              <img src={TelegramIcon} alt="icon" />
              <a
                href="https://t.me/DmytroOrgish"
                target="_blank"
                rel="noreferrer"
              >
                https://t.me/DmytroOrgish
              </a>
            </li>
            <li className={styles.contactItem}>
              <img src={GitIcon} alt="icon" />
              <a
                href="https://github.com/Dmytro888"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dmytro888
              </a>
            </li>
            <li className={styles.contactItem}>
              <img src={LinkedIn} alt="icon" />
              <a
                href="https://www.linkedin.com/in/dmitry-orgish-b60a781bb/"
                target="_blank"
                rel="noreferrer"
              >
                myLinkedIn
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.mainInfo}>
          <h3 className={styles.contactsTitle}>TECH SKILLS:</h3>
          <ul>
            <li className={styles.skillsItem}>
              <h4 className={styles.skillsType}>Technologies: </h4>
              <p>
                HTML5 / CSS / Javascript ES6+ / ReactJS / ReactNative / Vue /
                Redux / React Hooks / Sass/ Rest API / NodeJS / WebPack /
                TypeScript /
              </p>
            </li>
            <li className={styles.skillsItem}>
              <h4 className={styles.skillsType}>Development tools: </h4>
              <p>
                Chrome devtools / GIT / Bash / Figma / Postman / Trello / Jira /
                Microsoft Azure
              </p>
            </li>
            <li className={styles.skillsItem}>
              <h4 className={styles.skillsType}>Methodology: </h4>
              <p>Scrum / Agile</p>
            </li>
          </ul>
        </section>
        <section className={styles.mainInfo}>
          <div className={styles.softSkillSection}>
            <h3 className={styles.contactsTitle}>SOFT SKILLS:</h3>
            <ul>
              <li className={styles.softSkillsItem}>
                <h4 className={styles.softSkillsType}>Teamwork</h4>
              </li>
              <li className={styles.softSkillsItem}>
                <h4 className={styles.softSkillsType}>Creativity</h4>
              </li>
              <li className={styles.softSkillsItem}>
                <h4 className={styles.softSkillsType}>Adaptability</h4>
              </li>
              <li className={styles.softSkillsItem}>
                <h4 className={styles.softSkillsType}>Problem-Solving</h4>
              </li>
              <li className={styles.softSkillsItem}>
                <h4 className={styles.softSkillsType}>Time Management</h4>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.mainInfo}>
          <h3 className={styles.contactsTitle}>ADDITION INFO:</h3>
          <ul className={styles.addInfoList}>
            <li className={styles.skillsItem}>
              <h4 className={styles.skillsType}>Languages: </h4>
              <ul>
                <li className={styles.addItem}>English Intermediate (B1)</li>
                <li className={styles.addItem}>Ukrainian(native)</li>
                <li className={styles.addItem}>Russian(native)</li>
              </ul>
            </li>
            <li className={styles.skillsItem}>
              <h4 className={styles.skillsType}>Hobby: </h4>
              <ul>
                <li className={styles.addItem}>Coding</li>
                <li className={styles.addItem}>Sport</li>
                <li className={styles.addItem}>Travelling</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

export default About;
