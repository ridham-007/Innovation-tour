import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api";

const register = async (data) => {
  return await axios
    .post(`/signup`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
const login = async (data) => {
  return await axios
    .post(`/signin`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const resendEmail = async (data) => {
  return await axios
    .post(`/resendVerify`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const getAllUsers = async () => {
  return await axios
    .post(`/getalluser`, {})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const updateUser = async (data) => {
  return await axios
    .post(`/updateuser`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const deleteUser = async (data) => {
  return await axios
    .post(`/deleteuser`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const scavenger = async (data) => {
  return await axios
    .post('/scavenger', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}


const addTask = async (data) => {
  return await axios
    .post('/addTask', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}

const getAllTask = async () => {
  return await axios
    .post("/getAllTask", {})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}
const updateTask = async (data) => {
  return await axios
    .post("/updateTask", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}

const addMeeting = async (data) => {
  return await axios
    .post('/addMeetingDetails', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}

const deleteTask = async (data) => {
  return await axios
    .post(`/deleteTask`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const unRegister = async (data) => {
  return await axios
    .post(`/unRegister`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}
const forgotPasswordEmail = async (data) => {
  return await axios
    .post(`/forgotPassword`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}
const resetPassword = async (data) => {
  return await axios
    .post(`/resetPassword`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}
const resetPasswordEmail = async (data, EmailToken) => {
  return await axios
    .post(`/setPassword`,{
      ...data
    }, {
      headers: {
        'Authorization': `Bearer ${EmailToken}`
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}

export { register, login, resendEmail, getAllTask, unRegister, getAllUsers, updateUser, deleteUser, scavenger, addTask, updateTask, deleteTask, addMeeting, forgotPasswordEmail, resetPassword, resetPasswordEmail };
