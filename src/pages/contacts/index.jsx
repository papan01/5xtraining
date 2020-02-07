import React, { useState } from 'react';
import './style.scss';
import ReactModal from 'react-modal';


const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  function submit(e) {
    const formData = new FormData(e.target);
    setModalContent([
      `姓名：${formData.get('name')}`,
      `E-mail：${formData.get('mail')}`,
      `電話：${formData.get('phone')}`,
      `主題：${formData.get('type')}`,
      `訊息：${formData.get('message')}`,
    ]);
    e.preventDefault();
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="top-banner red-bg pt-3 pb-3 contacts">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center text-white">
              <h1 className="title mt-4 mb-3">有任何問題嗎？馬上聯絡我們！</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 pb-5 overwrite-contacts">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                <h3 className="mb-1">五倍紅寶石股份有限公司</h3>
                10046 台北市中正區衡陽路 7 號 5 樓
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex pl-0 mb-3">
                <div className="cml-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                  Tel：02-2331-5247
                  <br />
                  Mobile：0928-617-687
                  <br />
                  E-mail：
                  <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 pl-03 pr-0">
                  Fax：02-2331-8717
                  <br />
                  統編：24536806
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
                <iframe
                  title="googlemap"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.016266311726!2d121.513862!3d25.0424189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-z!5e0!3m2!1szh-TW!2stw!4v1482991564796"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="mb-3">
                任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
              </div>
              <form onSubmit={submit}>
                <input
                  style={{ width: '100%', border: '1px solid lightgrey' }}
                  className="formcontrol mb-3 p-2 rounded"
                  type="text"
                  name="name"
                  placeholder="名字"
                  required
                />
                <input
                  style={{ width: '100%', border: '1px solid lightgrey' }}
                  className="formcontrol mb-3 p-2 rounded"
                  type="email"
                  name="mail"
                  placeholder="信箱"
                  required
                />
                <input
                  style={{ width: '100%', border: '1px solid lightgrey' }}
                  className="formcontrol mb-3 p-2 rounded"
                  type="tel"
                  name="phone"
                  placeholder="電話"
                  required
                />
                <select
                  style={{ width: '100%', border: '1px solid lightgrey' }}
                  className="form-control mb-3 p-2 rounded"
                  name="type"
                  required
                >
                  <option value="" disabled>
                    請選擇主題
                  </option>
                  <option value="專案開發">專案開發</option>
                  <option value="技術諮詢">技術諮詢</option>
                  <option value="企業內訓">企業內訓</option>
                  <option value="課程詢問">課程詢問</option>
                  <option value="其他">其他</option>
                </select>
                <textarea
                  rows="6"
                  style={{ width: '100%', border: '1px solid lightgrey' }}
                  className="formcontrol mb-3 p-2 rounded"
                  name="message"
                  placeholder="請留下您的訊息"
                  required
                />
                <input type="submit" name="commit" value="送出" className="btn btn-red btn-block" data-disable-with="送出" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ReactModal isOpen={isOpen}>
        <div className="container">
          <div className="row">
            {modalContent.map((item) => (
              <div key={item} className="col-12 text-center">{item}</div>
            ))}
            <button type="button" className="btn btn-red btn-block" onClick={closeModal}>關閉</button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default Contacts;
