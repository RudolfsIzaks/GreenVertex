import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../index.css';
import manufacturing from '../assets/manufacturing.png';
import logistics from '../assets/logistics.png';
import transportation from '../assets/transportation.png';
import retail from '../assets/retail.png';
import energy from '../assets/energy.png';
import fulfillment from '../assets/fulfillment.png';
import { useNavigate } from "react-router-dom";

const tabData = [
  {
    label: "Logistics and Supply Chain",
    headline: "Unpredictable delays causing headaches?",
    body: "What if you could foresee and prevent them, ensuring smooth operations, happy clients, all the while reducing costs by 15% to 40%?",
    output: 0, 
    savings: 40 ,
    image: logistics
  },
  {
    label: "Retail and Online Grocers",
    headline: "Stockouts and delivery inefficiencies hurting profits?",
    body: "Imagine the perfect inventory management and streamlined delivery processes that reduces labor, inventory and delivery costs by 10-30% each!",
    output: 0, 
    savings: 30,
    image: retail
  },
  {
    label: "Fulfillment Centers",
    headline: "Operational issues slowing down throughput?",
    body: "Imagine achieving a 43% higher throughput while minimizing labor costs effortlessly and by 20%-40%, ensuring smooth operations and fewer production incidents.",
    output: 43,
    savings: 40,
    image: fulfillment
  },
  {
    label: "Other",
    headline: "",
    body: "",
    output: 0,
    savings: 0,
    image: ""
  }
];

const TabbedInterface = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(tabData[0]);
  const [outputWidth, setOutputWidth] = useState(0);
  const [savingsWidth, setSavingsWidth] = useState(0);

  const handleQualifyClick = () => {
    // Track the conversion
    gtag_report_conversion();

    // Navigate to the qualify page
    navigate("/qualify");
  }

  useEffect(() => {
    setOutputWidth(0);
    setSavingsWidth(0);
    setTimeout(() => {
      setOutputWidth(selectedTab.output);
      setSavingsWidth(selectedTab.savings);
    }, 100);
  }, [selectedTab]);

  const handleOtherButtonClick = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: '<span style="color: white;">Curious if we can help your business...</span>',
      html: '<p style="color: #b0b0b0;">Drastically reduce costs, Uplift profitability, Maximize output and resource allocation?</p>',
      icon: 'success',
      iconColor: '#33AF53',
      confirmButtonText: '<span style="color: white;">See If You Qualify</span>',
      background: '#212121',
      confirmButtonColor: '#33AF53',
      showCancelButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        gtag_report_conversion();

      // Navigate to the desired route
      navigate('/qualify');
      }
    });
  };

  const handleTabClick = (tab) => {
    if (tab.label === "Other") {
      handleOtherButtonClick();
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="gap-0 pb-10 md:h-screen grid md:grid-cols-8 grid_cont justify-center">
      <div className="grid_dummy md:block hidden"></div>
      <div className="grid_dummy md:block hidden"></div>
      <div className="container h-full md:col-start-3 md:col-span-4 col-span-8 button_grid">
        <h2 className="relative z-10 md:text-headline-3 text-subheadline-3 font-inter font-extrabold text-white p-3 text-center">These Issues are All Too Common In…</h2>
        <div className="tabs flex w-full justify-center flex-wrap items-center px-4 pb-4 rounded-xl mt-4 gap-4">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`md:py-4 py-2 md:px-5 px-4 font-semibold w-auto rounded-full shadow-md focus:outline-none md:text-md text-sm md:scale-100 text-white hover:scale-110 duration-200 hover:bg-green ${
                selectedTab.label === tab.label ? "bg-green text-white" : "bg-card"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid_dummy md:block hidden"></div>
      <div className="grid_dummy md:block hidden"></div>
      <div className="grid_dummy-bottom md:block hidden"></div>
      <div className="grid_dummy-bottom md:block hidden"></div>
      <div className="w-full flex flex-col justify-center items-start md:col-start-3 md:col-span-2 col-start-1 col-span-8 text_grid">
        <div className="content rounded-xl p-5">
          <h2 className="text-green text-subheadline-3 font-bold font-inter">{selectedTab.headline}</h2>
          <p className="mt-4 text-md font-inter font-semibold pr-20 text-white">{selectedTab.body}</p>
        </div>
      </div>
      <div className="md:col-span-2 col-span-8 icon-grid md:flex justify-center items-center hidden">
        {selectedTab.image && <img src={selectedTab.image} width="60%"/>}
      </div>
      <div className="grid_dummy-bottom col-span-2 md:block hidden"></div>
      <div className="grid_dummy-bottom col-span-2 md:block hidden"></div>
      <div className="progress-bars py-6 px-5 md:col-start-3 md:col-span-4 col-span-8 stats_grid">
        <h1 className="italic font-inter font-black text-white text-headline-3 mb-5">With <i className="text-green">Green Vertex</i></h1>
        {selectedTab.output > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-3">Potential Output: <i className="text-green font-black font-inter">+{selectedTab.output}%</i></h3>
            <div className="relative w-full h-3 bg-card rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-3 bg-green rounded-full transition-all duration-500 ease-out"
                style={{ width: `${outputWidth}%` }}
              ></div>
            </div>
          </div>
        )}
        {selectedTab.savings > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Potential Savings: <i className="text-green font-black font-inter"> -{selectedTab.savings}%</i></h3>
            <div className="relative w-full h-3 bg-red-500 rounded-full overflow-hidden">
              <div
                className="absolute  left-0 h-3 bg-green rounded-full transition-all duration-500 ease-out"
                style={{ width: `${100 - savingsWidth}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className="grid_dummy-bottom md:block hidden"></div>
      <div className="grid_dummy-bottom md:block hidden"></div>
    </div>
  );
};

export default TabbedInterface;
