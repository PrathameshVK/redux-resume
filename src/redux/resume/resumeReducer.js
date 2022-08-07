import { EDIT_RESUME } from "./resumeTypes";

const initialState = {
  resumeData: {
    personalProfile: "",
    personalDetails: {
      name: "",
      contactDetails: {
        email: "",
        phone: "",
      },
    },
    educationDetails: [],
    skills: [],
    projects: [],
    workExperience: [],
  },
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_RESUME:
      return {
        ...state,
        resumeData: {
          personalProfile: action.payload.personalProfile,
          personalDetails: {
            name: action.payload.personalDetails.name,
            contactDetails: {
              email: action.payload.personalDetails.contactDetails.email,
              phone: action.payload.personalDetails.contactDetails.phone,
            },
          },
          educationDetails: action.payload.educationDetails,
          skills: action.payload.skills,
          projects: action.payload.projects,
          workExperience: action.payload.workExperience,
        },
      };
    default:
      return state;
  }
};

export default resumeReducer;
