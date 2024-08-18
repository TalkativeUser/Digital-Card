
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import styles from './creator.module.css';
import them_1 from "../../../images/creators/creator1.png" 
import them_2 from "../../../images/creators/creator2.png" 
import them_3 from "../../../images/creators/creator3.png" 
import them_4 from "../../../images/creators/creator4.png" 


const CreatorTitle = styled.h3`
  text-align: center;
  background: linear-gradient(to right, aqua 33%, #74e274);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 40px;
`;

export default function Creators() {
  const creatorsSectionRef = useRef<HTMLDivElement>(null);
  const scalingLeyar = useRef<HTMLDivElement>(null);
  const navScaling: HTMLElement | null = document.getElementById('navScaling');

  useEffect(() => {
    const handleScroll = () => {
      if (creatorsSectionRef.current && scalingLeyar.current) {
        const rect = creatorsSectionRef.current.getBoundingClientRect();
        const distanceFromTop = rect.top;
        const distanceFromBottom = rect.bottom;

        if (distanceFromBottom <= window.innerHeight / 2 && distanceFromBottom > 0) {
          scalingLeyar.current.classList.remove(styles.scalingLeyar_hover);
        } else if (distanceFromBottom >= window.innerHeight / 2) {
          scalingLeyar.current.classList.add(styles.scalingLeyar_hover);
        }

        if (distanceFromTop <= window.innerHeight / 2 && distanceFromTop > 0) {
          scalingLeyar.current.classList.add(styles.scalingLeyar_hover);
        
        } else if (distanceFromTop >= window.innerHeight / 2) {
          scalingLeyar.current.classList.remove(styles.scalingLeyar_hover);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // استدعاء الوظيفة مبدئيًا في حالة وجود القسم بالفعل في العرض

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navScaling]);

  return (
    <>
      <CreatorTitle className={`mt-52 mb-6 ${styles.cratorsTitle} `} >Pro. For creators who <br /> want more.</CreatorTitle>

      <div ref={scalingLeyar} id="scalingLeyar" className={`rounded-3xl ${styles.scalingLeyar}`}></div>

      <section id="creators" ref={creatorsSectionRef}>
        <div
          className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-28 py-16 rounded-3xl bg-black "
          style={{ backgroundColor: "#121215" }}
        >
          <div className="bg-black py-3 w-[100%] flex justify-center mb-3">
            <img
              className="w-[70%] border-1 border-white rounded-3xl p-4"
              src={them_1}
              alt=""
            />
          </div>
          <div className="bg-black w-[100%] flex justify-center mb-4">
            <img
              className="w-[70%] border-1 border-white rounded-3xl p-4"
              src={them_2}
              alt=""
            />
          </div>
          <div className="bg-black w-[100%] flex justify-center">
            <img
              className="w-[70%] border-1 border-white rounded-3xl p-4"
              src={them_3}
              alt=""
            />
          </div>
          <div className="bg-black w-[100%] flex justify-center">
            <img
              className="w-[70%] border-1 border-white rounded-3xl p-4"
              src={them_4}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
