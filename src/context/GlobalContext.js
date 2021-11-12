import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [themeDark, setThemeDark] = useState(false);
  const [showSidebarDashboard, setShowSidebarDashboard] = useState(true);
  const [applicationModalVisible, setApplicationModalVisible] = useState(false);
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const [addPaymentModalVisible, setAddPaymentModalVisible] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [valorationModalVisible, setValorationModalVisible] = useState(false);
  const [addStudiesModalVisible, setAddStudiesModalVisible] = useState(false);
  const [addWorkExperienceModalVisible, setAddWorkExperienceModalVisible] =
    useState(false);
  const [header, setHeader] = useState({
    theme: "light",
    bgClass: "default",
    variant: "primary",
    align: "left",
    isFluid: false,
    button: "cta", // profile, account, null
    buttonText: "Get started free", // profile, account, null
    reveal: true,
  });
  const [footer, setFooter] = useState({
    theme: "dark",
    style: "style1", //style1, style2
  });

  const [transactionId, setTransactionId] = useState(false);
  const [userId, setUserId] = useState();

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleSidebarDashboard = () => {
    setShowSidebarDashboard(!showSidebarDashboard);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleApplicationModal = () => {
    setApplicationModalVisible(!applicationModalVisible);
  };

  const toggleSignInModal = () => {
    setSignInModalVisible(!signInModalVisible);
  };

  const toggleSignUpModal = () => {
    setSignUpModalVisible(!signUpModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };

  const toggleAddPaymentModal = () => {
    setAddPaymentModalVisible(!addPaymentModalVisible);
  };

  const showPageSpinner = () => {
    setShowSpinner({ showSpinner: true });
  };
  const hidePageSpinner = () => {
    setShowSpinner({ showSpinner: false });
  };

  const toggleConfirmationModal = () => {
    setConfirmationModalVisible(!confirmationModalVisible);
  };

  const toggleValorationModal = () => {
    setValorationModalVisible(!valorationModalVisible);
  };

  const toggleAddStudiesModal = () => {
    setAddStudiesModalVisible(!addStudiesModalVisible);
  };

  const toggleAddWorkExperienceModal = () => {
    setAddWorkExperienceModalVisible(!addWorkExperienceModalVisible);
  };

  return (
    <GlobalContext.Provider
      value={{
        themeDark,
        toggleTheme,
        showSidebarDashboard,
        toggleSidebarDashboard,
        videoModalVisible,
        toggleVideoModal,
        applicationModalVisible,
        toggleApplicationModal,
        signInModalVisible,
        toggleSignInModal,
        signUpModalVisible,
        toggleSignUpModal,
        visibleOffCanvas,
        toggleOffCanvas,
        closeOffCanvas,
        header,
        setHeader,
        footer,
        setFooter,
        addPaymentModalVisible,
        toggleAddPaymentModal,
        showSpinner,
        showPageSpinner,
        hidePageSpinner,
        toggleConfirmationModal,
        confirmationModalVisible,
        transactionId,
        setTransactionId,
        toggleValorationModal,
        valorationModalVisible,
        userId,
        setUserId,
        toggleAddStudiesModal,
        addStudiesModalVisible,
        toggleAddWorkExperienceModal,
        addWorkExperienceModalVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
