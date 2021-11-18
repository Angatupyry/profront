export const checkSession = (gContext, user, token) => {
  console.log("check session");
  // let user = JSON.parse(localStorage.getItem("user"));
  // let token = JSON.parse(localStorage.getItem("token"));
  try {
    console.log(localStorage.getItem("user"));
    console.log(token);
    if (user && token) {
      gContext.setIsLoggedIn(true);
    }
  } catch (error) {
    console.log(error);
  }
};

export const closeSession = async (gContext) => {
  //e.preventDefault();
  //setState({ loading: true, error: null });

  try {
    // setState({ loading: false, error: null });
    localStorage.setItem("token", null);
    localStorage.setItem("user", null);
    gContext.setIsLoggedIn(false);
  } catch (error) {
    console.log(error);
    //setState({ loading: false, error: error });
  }
};

export const isLoggedIn = () => {
  try {
    let user = JSON.parse(Cookies.get("user"));
    let token = JSON.parse(Cookies.get("token"));
    console.log(user);
    if (user && token) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
