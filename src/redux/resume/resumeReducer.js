import { EDIT_RESUME } from "./resumeTypes";

const initialState = {
  resumeData: {
    personalDetails: {
      name: "",
      birthData: "",
      contactDetails: {
        email: "",
        phone: "",
      },
    },
    educationDetails: [],
    skills: [],
    workExperience: [],
  },
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_RESUME:
      return {
        ...state,
        resumeData: {
          personalDetails: {
            name: action.payload.personalDetails.name,
            birthDate: action.payload.personalDetails.birthDate,
            contactDetails: {
              email: action.payload.personalDetails.contactDetails.email,
              phone: action.payload.personalDetails.contactDetails.phone,
            },
          },
          educationDetails: action.payload.educationDetails,
          skills: action.payload.skills,
          workExperience: action.payload.workExperience,
        },
      };
    default:
      return state;
  }
};

export default resumeReducer;
