import React from 'react';
import './Diagonstic.css';
import d1 from '../../../images/dg1.jpg';
import d2 from '../../../images/dg2.jpg';
import d3 from '../../../images/dg3.jpg';


const Diagonstick = () => {
    return (
        <div class="card-group">
  <div class="card">
    <img src={d3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Blood tests</h5>
      <p class="card-text">When your muscle has been damaged, as in a heart attack, your body releases substances in your blood. Blood tests can measure the substances and show if, and how much of, your heart muscle has been damaged.Blood tests are also done to measure the level of other substances in your blood, such as blood fats (e.g. cholesterol and triglycerides), vitamins and minerals.Your blood sample is taken from a vein in your arm. A laboratory then tests it and sends the results to your doctor, who will explain the results to you.</p>
      
    </div>
  </div>
  <div class="card">
    <img src={d1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Echocardiogram </h5>
      <p class="card-text">An echocardiogram is a common test. It gives a picture of your heart using ultrasound, a type of X-ray. It uses a probe either on your chest or down your oesophagus (throat).It helps your doctor check if there are any problems with your heart’s valves and chambers, and see how strongly your heart pumps blood.</p>
      
    </div>
  </div>
  <div class="card">
    <img src={d2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Exercise stress test</h5>
      <p class="card-text">A stress test, sometimes called a ‘treadmill’ or ‘exercise’ test, is a type of ECG that is done while you are exercising. It helps your doctor to find out how well your heart works when you are physically active</p>
      
    </div>
  </div>
</div>
    );
};

export default Diagonstick;