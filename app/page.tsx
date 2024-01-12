"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import styles from "@/app/css/main.module.css";
import Header from "@/app/header";


const contact = [
  {
    title: 'Contact',
    imageUrl: '/image/contact.png',
  },
  {
    title: '자격 및 수료',
    imageUrl: '/image/자격.png',
  },
  {
    title: 'Education',
    imageUrl: '/image/computer.png',
  },
];

const projects = [
  {
    title: '#1 Aily-AIRecycle',
    description: 'EXPO 출품',
    operatingDate: '2023-03 ~ (진행중)',
    imageUrl: '/image/project1.png',
    link: 'https://github.com/Aily-AIRecycle',
    people: '9',
  },
  {
    title: '#2 Project 준비중',
    operatingDate: '(준비중)',
    imageUrl: '/image/wait.jpg',
    link: 'https://github.com/Aily-AIRecycle',
    people: '1',
  },
  {
    title: '#3 Project 준비중',
    operatingDate: '(준비중)',
    imageUrl: '/image/wait.jpg',
    link: 'https://github.com/Aily-AIRecycle',
    people: '2',
  },

  {
    title: '#4 Project 준비중',
    operatingDate: '(준비중)',
    imageUrl: '/image/wait.jpg',
    link: 'https://github.com/Aily-AIRecycle',
    people: '1',
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <div className="background-image-container" id="home"></div>
      <div className="intro font-light font-roboto center">
        Yoonchan Shin
      </div>

      <div className="intro-container">
        <div className="font-thin font-noto-sans-kr">안녕하세요!</div>
        <div className="font-thin font-noto-sans-kr">"창의적인" 안드로이드 신입 개발자</div>
        <div className="font-thin font-noto-sans-kr">신윤찬입니다</div>
      </div>


      <div id="about">
        <div className="about-container">
          <div className="about-me-text1 text-gray-300 roboto">About me</div>
          <div className="about-me-text2 text-gray-200 font-noto-sans-kr">저의 이야기가 궁금하신가요?</div>
        </div>
      </div>

      <div className="contact" >
        <div className="contact-container-1 ">
          <img src="/image/contact.png" alt="contact" className="custom-image-style" />
          <div className="text-container">
            <div className="text-31xl font-noto-sans-kr text-gray-300 text-center">
              <div className="card-title roboto font-light text-gray-300">
                Contact
              </div>
              <div className="text-darkslategray text-xl font-light font-noto-sans-kr text-center">
                <div className="frame">
                  <div className="group">
                    <img className="rectangle" alt="github" src="/image/github.png" />
                    <div className="text-wrapper"><a href="https://github.com/SHINYOONCHAN">바로가기＞</a></div>
                    <div className="div">Github</div>
                  </div>
                  <div className="group-2">
                    <div className="text-wrapper-2">Gmail</div>
                    <img className="img" alt="gmail" src="/image/gmail.png" />
                    <div className="text-wrapper-3"><a href="mailto:tlsdbscks123@gmail.com">tlsdbscks123@gmail.com</a></div>
                  </div>
                  <div className="group-3">
                    <div className="text-wrapper-4"><a href="https://play.google.com/store/apps/developer?id=Aily">바로가기＞</a></div>
                    <div className="text-wrapper-2">PlayStore</div>
                    <img className="rectangle-2" alt="playstore" src="/image/playstore.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-container-2">
          <img src="/image/자격.png" alt="자격" className="custom-image-style" />
          <div className="text-container">
            <div className="text-31xl font-noto-sans-kr text-gray-300 text-center">
              <div className="card-title roboto font-light text-gray-300">
                자격 및 수료
              </div>
              <div className="text-darkslategray text-xl font-light font-noto-sans-kr text-center">
                <div className="frame">
                  <div className="group-2">
                    <div className="text-wrapper-2">2023 동양미래 EXPO (교내대회)</div>
                  </div>
                  <div className="group-2">
                  </div>
                  <div className="group-3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-container-3">
          <img src="/image/computer.png" alt="education" className="custom-image-style" />
          <div className="text-container">
            <div className="text-31xl font-noto-sans-kr text-gray-300 text-center">
              <div className="card-title roboto font-light text-gray-300">
                Education
              </div>
              <div className="text-darkslategray text-xl font-light font-noto-sans-kr text-center">
                <div className="frame">
                  <div className="group-2">
                    <div className="text-wrapper-2">동양미래대학교</div>
                  </div>
                  <div className="group-2">
                    <div className="text-wrapper-2">2019-03 ~ 2025-03 (재학중)</div>
                  </div>
                  <div className="group-3">
                    <div className="text-wrapper-2">소프트웨어공학과 전공</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skill">
        <div className="about-container">
          <div className="about-me-text1 text-gray-300 roboto">Skill</div>
          <div className="about-me-text2 text-gray-200 font-noto-sans-kr">저는 이러한 기술들을 가지고 있습니다</div>
        </div>
      </div>

      <div className="skill-frame">
        <div className="border-gray-700"></div>
        <table className="w-full">
          <thead>
            <tr className={styles.thColor}>
              <th className="p-2 text-white roboto">Skill</th>
              <th className="p-2 text-white roboto">Details</th>
            </tr>
          </thead>
          <tbody>
            <SkillItem title="Language" content="Dart" />
            <SkillItem title="Architecture" content="Provider, Riverpod" />
            <SkillItem title="Networking" content="http, dio" />
            <SkillItem title="Asyncronous" content="Future, async/await" />
            <SkillItem title="JetPack" content="Flutter Framework" />
            <SkillItem title="Local Data" content="sqflite, Hive" />
            <SkillItem title="Image" content="CachedNetworkImage" />
            <SkillItem title="Media" content="chewie, audioplayers" />
            <SkillItem title="Collaboration" content="Notion, Slack" />
            <SkillItem title="DesignTool" content="Figma" />
            <SkillItem title="DI" content="Provider, get_it" />
          </tbody>
        </table>
      </div>

      <div id="projects">
        <div className="about-container">
          <div className="about-me-text1 text-gray-300 roboto">Projects</div>
          <div className="about-me-text2 text-gray-200 font-noto-sans-kr">저는 이러한 프로젝트를 진행했습니다</div>
        </div>
      </div>

      <div className="skill-frame">
        <footer className="flex-1">
          <div className="overflow-x-auto">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="project-frame ">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg hover:opacity-100 transition-opacity duration-300 flex flex-col"
                      style={{ maxWidth: '100%' }}
                    >
                      <div className="overflow-hidden relative">
                        <div className="project-scale transition-transform duration-500">
                          <div style={{ position: 'relative' }}>
                            <img
                              src="/image/people.png"
                              alt="인원"
                              className="people-img"
                            />
                            <Image src={project.imageUrl} alt={project.title} width={2000} height={850} />
                            <div className="project-number">
                              <span>{project.people}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div>
                          <div className="flex items-center">
                            <p className="project-title">{project.title}</p>
                          </div>
                          <p className="project-description">{project.description}</p>
                          <p className="project-operatingDate">{project.operatingDate}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

// SkillItem 컴포넌트 정의
function SkillItem({ title, content }: { title: string, content: string }) {
  let backgroundColorClass = "";
  let borderClass = "";

  if (content === "Dart") {
    backgroundColorClass = styles.bgcustomcolor1;
    borderClass = "bg-green-700";
  } else if (content.includes("chewie") || content.includes("audioplayers")) {
    borderClass = "bg-yellow-700";
  } else if (content.includes("Provider") || content.includes("Riverpod")) {
    borderClass = "bg-blue-700";
  } else if (content.includes("http") || content.includes("dio")) {
    borderClass = "bg-red-700";
  } else if (content.includes("Future") || content.includes("async/await")) {
    borderClass = "bg-orange-700";
  } else if (content === "Flutter Framework") {
    borderClass = "bg-yellow-700";
  } else if (content.includes("sqflite") || content.includes("Hive")) {
    borderClass = "bg-purple-700";
  } else if (content === "CachedNetworkImage") {
    borderClass = "bg-gray-700";
  } else if (content.includes("Github") || content.includes("Notion")) {
    borderClass = "bg-green-900";
  } else if (content === "Figma") {
    borderClass = "bg-red-700";
  }

  return (
    <tr className="border-b border-gray-700">
      <td className={`p-2 text-black font-semibold`}>{title}</td>
      <td className={`p-2 text-white`}>
        <div className={`border rounded-md p-1 text-xs mt-1 min-w-max inline-block ${styles.contentbox} ${borderClass}`}>{content}</div>
      </td>
    </tr>
  );
}
