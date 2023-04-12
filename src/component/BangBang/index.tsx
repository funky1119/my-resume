import React, { useState } from "react";
import { getSounds } from "../../api/sound";
import "./BangBang.css";

const BangBang = (): JSX.Element => {
  const [animal, setAnimal] = useState("");
  const [animalSound, setAnimalSound] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAnimal(() => value);
  };

  const handleClick = async () => {
    if (!animal) {
      alert("입력하세요");
      return;
    }

    const result = await getSounds(animal);
    const data = result?.data;
    if (data.check) {
      setAnimalSound(data.sound);
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 20, fontWeight: "bold" }}>
            Funky의 이력서
          </span>
        </div>
        <div id="body">
          <ul id="ul">
            <li id="li">Introduce</li>
            <li id="li">hover</li>
            <li id="li">css</li>
            <li id="li">effect</li>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            value={animal}
            onChange={handleChange}
            style={{ height: 30 }}
          />
          <button
            style={{ width: 80, height: 36.8, backgroundColor: "blue" }}
            onClick={handleClick}
          >
            <span style={{ fontSize: 16, color: "#FFF" }}>누르세요</span>
          </button>
        </div>
        {animalSound && (
          <div style={{ marginTop: 20 }}>
            <span style={{ fontSize: 20 }}>{animalSound}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default BangBang;
