import "./PriceList.css";
import MacedonianOffer from "../../public/Offers/Macedonian.jpg";
import TurkishOffer from "../../public/Offers/Turkish.jpg";
import AlbanianOffer from "../../public/Offers/Albanian.jpg";
import { useState } from "react";
import Modal from "../Modal";

const PriceList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const openModal = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="wrapper80">
      <div className="offers d-flex">
        <div className="flex-33">
          <h2 className="colorGray">
            Понуда за <br />
            Македонски свадби
          </h2>
          <img
            src={MacedonianOffer}
            alt="macedonianOffer"
            className="hoveringOffer"
            onClick={() => openModal(currentImage)}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            imageSrc={MacedonianOffer}
          />
          <p>Кликни на понудата </p>
        </div>
        <div className="flex-33">
          <h2 className="colorGray">
            Понуда за <br /> Турски свадби
          </h2>
          <img
            src={TurkishOffer}
            alt="turkishOffer"
            className="hoveringOffer"
            onClick={() => openModal(currentImage)}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            imageSrc={TurkishOffer}
          />
          <p>Кликни на понудата </p>
        </div>
        <div className="flex-33">
          <h2 className="colorGray">
            Понуда за <br />
            Албански свадби
          </h2>
          <img
            src={AlbanianOffer}
            alt="albanianOffer"
            className="hoveringOffer"
            onClick={() => openModal(currentImage)}
          />
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            imageSrc={AlbanianOffer}
          />
          <p>Кликни на понудата </p>
        </div>
      </div>
      <div className="photosessionPrices colorGray">
        <h2>Цени на фотосесии во студио</h2>
        <div className="d-flex">
          <div className="photosessionStandard flex-50">
            <h2>Стандардна Фотосесија</h2>
            <p>
              Стандардна фотосесија во студио <br /> значи правиме околу 100 -
              200 слики <br /> и истите ги добивате дигитално <br /> по ваша
              желба дали по <br /> e-mail, Viber, WhatsApp, WeTransfer <br />
              или може исто така на ваше USB <br /> за најдобар квалитет
            </p>
            <h2>2000 ден</h2>
          </div>
          <div className="photosessionMemory flex-50">
            <h2>Спомен Фотосесија</h2>
            <p>
              Спомен фотосесија значи правиме одприлика 50 слики, потоа ги
              разгледувате и одбирате колку слики сакате да извадите истата
              слика што ке ја одберете ја добивате дигитално по ваша желба дали
              по e-mail, Viber, WhatsApp, WeTransfer или може исто така на ваше
              USB за најдобар квалитет
            </p>
            <h2>200ден / од слика</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
