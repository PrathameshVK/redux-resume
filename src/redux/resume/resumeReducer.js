import { EDIT_RESUME } from "./resumeTypes";

const initialState = {
  resumeData: {
    personalDetails: {
      name: "Prathamesh Kulkarni",
      birthData: "24/08/1998",
      contactDetails: {
        email: "pk@gmail.com",
        phone: "9876543210",
      },
    },
    educationDetails: {
      graduationDetails: {
        collegeName: "willingdon college",
        graduationYear: "2019",
      },
      postGraduationDetails: {
        collegeName: "CSIBER college",
        graduationYear: "2022",
      },
    },
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
          educationDetails: {
            graduationDetails: {
              collegeName:
                action.payload.educationDetails.graduationDetails.collegeName,
              graduationYear:
                action.payload.educationDetails.graduationDetails
                  .graduationYear,
            },
            postGraduationDetails: {
              collegeName:
                action.payload.educationDetails.postGraduationDetails
                  .collegeName,
              graduationYear:
                action.payload.educationDetails.postGraduationDetails
                  .graduationYear,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default resumeReducer;
