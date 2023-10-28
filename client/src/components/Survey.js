import React, { useEffect, useState } from "react";
import { LoadingOverlay, Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";

function Survey() {
  // const sheetURl =
  //   "https://script.google.com/macros/s/AKfycbxXJN-XDj5H4PySj1fZYKkXLTONqskzKZ6JesvmqkKZJVErg4YWvP1AiPOVB6de6q9ing/exec";
  const sheetURl =
    "https://script.google.com/macros/s/AKfycbwZr1KH_SLmRwshd-s1kH7OlhaWh1Wcb1blRD9Nv-WQm3f9DDOAypB8dtZXGH842gZO/exec";
  const form = document.forms["google-sheet"];
  const user = JSON.parse(localStorage.getItem('user'));

  const [sessions, setSessions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [data, setData] = useState({
    satisfaction: "",
    thoughts: "",
    details: "",
    experience: "",
    information: "",
    deposit: "",
    communicationProblems: "",
    dinnerAndNetworking: "",
    depositProcess: "",
    sessionsInfo: "",
    sessionImprovement: "",
    satisfactionTour: "",
    akasakaAIR: "",
    overAll: "",
  });

  const sendData = async () => {
    setIsLoading(true);
    await fetch(sheetURl, {
      method: "post",
      body: new FormData(form),
    })
      .then(() => {
        setIsLoading(false);
        setFormSubmit(true);
        // alert("Thanks for Contacting us...!");
      })
      .catch((error) => {
        setIsLoading(false);
        setFormSubmit(true);
        console.error("Error!", error.message);
      });
  };

  const onClick = (e) => {
    e.preventDefault();
    sendData();
    setData({
      satisfaction: "",
      thoughts: "",
      details: "",
      experience: "",
      information: "",
      deposit: "",
      communicationProblems: "",
      dinnerAndNetworking: "",
      depositProcess: "",
      sessionsInfo: "",
      sessionImprovement: "",
      satisfactionTour: "",
    });
  };

  function handleChange(event) {
    const { id, value, type, checked } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <>
      <p className="formHeading">
        <span>
          Thank you for joining us at our Tokyo Event. We trust you had a chance
          to explore and discover new cultures and innovations during these last
          two days.
        </span>
        <span>
          Your feedback is invaluable to us as we strive to enhance our
          registration process, dining venues, and, of course, the quality of
          speakers at our upcoming international gatherings. Our goal is to
          achieve a 100% participation rate in this survey, and to encourage
          your participation, we're offering a unique reward to one out of every
          20 survey respondents.
        </span>
      </p>
      <div className="form feedbackContainer">
        {!formSubmit ? (
          <form className="feedbackForm" name="google-sheet">
            <div>
              <input type="text" value={user.name} name="Name" style={{
                visibility:'hidden'
              }}></input>
            </div>
            
            <div>
              <h1>Company Visits</h1>

              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    On a scale of 1 to 5, how satisfied were you with the
                    quality of speakers and presenters during the company
                    visits? (1 = Very Dissatisfied, 5 = Very Satisfied)
                  </span>
                </div>

                <div className="radio">
                  <div>
                    <label>
                      1
                      <input
                        type="radio"
                        id="satisfaction"
                        name="On a scale of 1 to 5, how satisfied were you with the quality of speakers and presenters during the company visits? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Very Dissatisfied"
                        onChange={handleChange}
                        checked={data.satisfaction === "Very Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      2
                      <input
                        type="radio"
                        id="satisfaction"
                        name="On a scale of 1 to 5, how satisfied were you with the quality of speakers and presenters during the company visits? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Dissatisfied"
                        onChange={handleChange}
                        checked={data.satisfaction === "Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      3
                      <input
                        type="radio"
                        id="satisfaction"
                        name="On a scale of 1 to 5, how satisfied were you with the quality of speakers and presenters during the company visits? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Moderate"
                        onChange={handleChange}
                        checked={data.satisfaction === "Moderate"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      4
                      <input
                        type="radio"
                        id="satisfaction"
                        name="On a scale of 1 to 5, how satisfied were you with the quality of speakers and presenters during the company visits? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Satisfied"
                        onChange={handleChange}
                        checked={data.satisfaction === "Satisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      5
                      <input
                        type="radio"
                        id="satisfaction"
                        name="On a scale of 1 to 5, how satisfied were you with the quality of speakers and presenters during the company visits? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Very Satisfied"
                        onChange={handleChange}
                        checked={data.satisfaction === "Very Satisfied"}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className="question">
                  <h3>2.</h3>
                  <span>
                    Were there any specific company visits that stood out to you
                    as exceptionally informative or valuable? Please share your
                    thoughts.
                  </span>
                </div>

                <div className="textarea">
                  <textarea
                    type="text"
                    id="thoughts"
                    placeholder="Please share your thoughts..."
                    onChange={handleChange}
                    name="Were there any specific company visits that stood out to you as exceptionally informative or valuable? Please share your thoughts."
                    value={data.thoughts}
                    rows={3}
                    cols={35}
                    style={{ border: "1px solid black", borderRadius: "5px" }}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="question">
                  <h3>3.</h3>
                  <span>
                    Were there any areas in the company visits that you felt
                    could be improved? Please provide details.
                  </span>
                </div>
                <div className="textarea">
                  <textarea
                    type="text"
                    id="details"
                    placeholder="Please provide details..."
                    rows={3}
                    cols={35}
                    onChange={handleChange}
                    name="Were there any areas in the company visits that you felt could be improved? Please provide details."
                    value={data.details}
                    style={{ border: "1px solid black", borderRadius: "5px" }}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Dinners and Networking Event</h1>

              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    How would you rate your overall experience at the dinners
                    and networking events? (1=Very Poor, 5=Excellent)
                  </span>
                </div>

                <div className="radio">
                  <div>
                    <label htmlFor="very dissatisfied">
                      1
                      <input
                        type="radio"
                        id="dinnerAndNetworking"
                        name="How would you rate your overall experience at the dinners and networking events? (1=Very Poor, 5=Excellent)"
                        value="Very Dissatisfied"
                        onChange={handleChange}
                        checked={
                          data.dinnerAndNetworking === "Very Dissatisfied"
                        }
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      2
                      <input
                        type="radio"
                        id="dinnerAndNetworking"
                        name="How would you rate your overall experience at the dinners and networking events? (1=Very Poor, 5=Excellent)"
                        value="Dissatisfied"
                        onChange={handleChange}
                        checked={data.dinnerAndNetworking === "Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      3
                      <input
                        type="radio"
                        id="dinnerAndNetworking"
                        name="How would you rate your overall experience at the dinners and networking events? (1=Very Poor, 5=Excellent)"
                        value="Moderate"
                        onChange={handleChange}
                        checked={data.dinnerAndNetworking === "Moderate"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      4
                      <input
                        type="radio"
                        id="dinnerAndNetworking"
                        name="How would you rate your overall experience at the dinners and networking events? (1=Very Poor, 5=Excellent)"
                        value="Satisfied"
                        onChange={handleChange}
                        checked={data.dinnerAndNetworking === "Satisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      5
                      <input
                        type="radio"
                        id="dinnerAndNetworking"
                        name="How would you rate your overall experience at the dinners and networking events? (1=Very Poor, 5=Excellent)"
                        value="Very Satisfied"
                        onChange={handleChange}
                        checked={data.dinnerAndNetworking === "Very Satisfied"}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div className="question">
                  <h3>2.</h3>
                  <span>
                    Did you find the networking opportunities during the tour to
                    be valuable for your professional growth? Please explain.
                  </span>
                </div>

                <div className="textarea">
                  <textarea
                    type="text"
                    id="information"
                    placeholder="Please explain..."
                    rows={3}
                    cols={35}
                    onChange={handleChange}
                    name="Did you find the networking opportunities during the tour to be valuable for your professional growth? Please explain."
                    value={data.information}
                    style={{ border: "1px solid black", borderRadius: "5px" }}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Tour Organization</h1>
              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    On a scale of 1 to 5, how satisfied were you with the
                    overall organization of the tour, including the portal,
                    bookings, and support provided by the Japan leaders? (1 =
                    Very Dissatisfied, 5 = Very Satisfied)
                  </span>
                </div>

                <div className="radio">
                  <div>
                    <label htmlFor="very dissatisfied">
                      1
                      <input
                        type="radio"
                        id="experience"
                        name="On a scale of 1 to 5, how satisfied were you with the overall organization of the tour, including the portal,bookings, and support provided by the Japan leaders? (1 = Very Dissatisfied,5 = Very Satisfied)"
                        value="Very Dissatisfied"
                        onChange={handleChange}
                        checked={data.experience === "Very Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      2
                      <input
                        type="radio"
                        id="experience"
                        name="On a scale of 1 to 5, how satisfied were you with the overall organization of the tour, including the portal,bookings, and support provided by the Japan leaders? (1 = Very Dissatisfied,5 = Very Satisfied)"
                        value="Dissatisfied"
                        onChange={handleChange}
                        checked={data.experience === "Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      3
                      <input
                        type="radio"
                        id="experience"
                        name="On a scale of 1 to 5, how satisfied were you with the overall organization of the tour, including the portal,bookings, and support provided by the Japan leaders? (1 = Very Dissatisfied,5 = Very Satisfied)"
                        value="Moderate"
                        onChange={handleChange}
                        checked={data.experience === "Moderate"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      4
                      <input
                        type="radio"
                        id="experience"
                        name="On a scale of 1 to 5, how satisfied were you with the overall organization of the tour, including the portal,bookings, and support provided by the Japan leaders? (1 = Very Dissatisfied,5 = Very Satisfied)"
                        value="Satisfied"
                        onChange={handleChange}
                        checked={data.experience === "Satisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      5
                      <input
                        type="radio"
                        id="experience"
                        name="On a scale of 1 to 5, how satisfied were you with the overall organization of the tour, including the portal,bookings, and support provided by the Japan leaders? (1 = Very Dissatisfied,5 = Very Satisfied)"
                        value="Very Satisfied"
                        onChange={handleChange}
                        checked={data.experience === "Very Satisfied"}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>2.</h3>
                  <span>
                    Were there any specific challenges you faced with the tour
                    organization, such as booking issues or communication
                    problems? Please describe.
                  </span>
                </div>

                <div className="textarea">
                  <textarea
                    type="text"
                    id="communicationProblems"
                    placeholder="Please explain..."
                    rows={3}
                    cols={35}
                    onChange={handleChange}
                    name="Were there any specific challenges you faced with the tour organization, such as booking issues or communication problems? Please describe."
                    value={data.communicationProblems}
                    style={{ border: "1px solid black", borderRadius: "5px" }}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <h1>Registration & Deposit Process</h1>

              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    How satisfied were you with the registration and deposit
                    process for the tour? (1 = Very Dissatisfied, 5 = Very
                    Satisfied)
                  </span>
                </div>

                <div className="radio">
                  <div>
                    <label htmlFor="very dissatisfied">
                      1
                      <input
                        type="radio"
                        id="depositProcess"
                        name="How satisfied were you with the registration and deposit process for the tour? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Very Dissatisfied"
                        onChange={handleChange}
                        checked={data.depositProcess === "Very Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      2
                      <input
                        type="radio"
                        id="depositProcess"
                        name="How satisfied were you with the registration and deposit process for the tour? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Dissatisfied"
                        onChange={handleChange}
                        checked={data.depositProcess === "Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      3
                      <input
                        type="radio"
                        id="depositProcess"
                        name="How satisfied were you with the registration and deposit process for the tour? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Moderate"
                        onChange={handleChange}
                        checked={data.depositProcess === "Moderate"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      4
                      <input
                        type="radio"
                        id="depositProcess"
                        name="How satisfied were you with the registration and deposit process for the tour? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Satisfied"
                        onChange={handleChange}
                        checked={data.depositProcess === "Satisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      5
                      <input
                        type="radio"
                        id="depositProcess"
                        name="How satisfied were you with the registration and deposit process for the tour? (1 = Very Dissatisfied, 5 = Very Satisfied)"
                        value="Very Satisfied"
                        onChange={handleChange}
                        checked={data.depositProcess === "Very Satisfied"}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="question">
                    <h3>2.</h3>
                    <span>
                      Did you encounter any challenges or issues during the
                      registration and deposit process? Please provide details.
                    </span>
                  </div>

                  <div className="textarea">
                    <textarea
                      type="text"
                      id="deposit"
                      placeholder="Please provide details..."
                      rows={3}
                      cols={35}
                      onChange={handleChange}
                      name="Did you encounter any challenges or issues during the registration and deposit process? Please provide details."
                      value={data.deposit}
                      style={{ border: "1px solid black", borderRadius: "5px" }}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1>Monthly Information Sharing Sessions</h1>
              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    Did you attend the monthly information sharing sessions
                    leading up to the tour?
                  </span>
                </div>
                <div className="radio">
                  <div>
                    <label>
                      Yes
                      <input
                        type="radio"
                        id="sessionsInfo"
                        name="Did you attend the monthly information sharing sessions leading up to the tour?"
                        value="yes"
                        onClick={(event) => {
                          handleChange(event);
                          setSessions(true);
                        }}
                        checked={data.sessionsInfo === "yes"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      No
                      <input
                        type="radio"
                        name="Were there any specific topics or information covered in the monthly sessions that you found particularly helpful or that you believe could be improved in the future?"
                        id="sessionsInfo"
                        value="no"
                        onClick={(event) => {
                          handleChange(event);
                          setSessions(false);
                        }}
                        checked={data.sessionsInfo === "no"}
                      />
                    </label>
                  </div>
                </div>

                {sessions ? (
                  <div className="">
                    <div className="question">
                      <h3>2</h3>
                      <span>
                        How valuable did you find them in preparing you for the
                        tour? (1=Not Valuable, 5=Extremely Valuable)
                      </span>
                    </div>
                    <div className="radio">
                      <div>
                        <label htmlFor="very dissatisfied">
                          1
                          <input
                            type="radio"
                            id="satisfactionTour"
                            name="How valuable did you find them in preparing you for the tour? (1=Not Valuable, 5=Extremely Valuable)"
                            value="Very Dissatisfied"
                            onChange={handleChange}
                            checked={
                              data.satisfactionTour === "Very Dissatisfied"
                            }
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          2
                          <input
                            type="radio"
                            id="satisfactionTour"
                            name="How valuable did you find them in preparing you for the tour? (1=Not Valuable, 5=Extremely Valuable)"
                            value="Dissatisfied"
                            onChange={handleChange}
                            checked={data.satisfactionTour === "Dissatisfied"}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          3
                          <input
                            type="radio"
                            id="satisfactionTour"
                            name="How valuable did you find them in preparing you for the tour? (1=Not Valuable, 5=Extremely Valuable)"
                            value="Moderate"
                            onChange={handleChange}
                            checked={data.satisfactionTour === "Moderate"}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          4
                          <input
                            type="radio"
                            id="satisfactionTour"
                            name="How valuable did you find them in preparing you for the tour? (1=Not Valuable, 5=Extremely Valuable)"
                            value="Satisfied"
                            onChange={handleChange}
                            checked={data.satisfactionTour === "Satisfied"}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          5
                          <input
                            type="radio"
                            id="satisfactionTour"
                            name="How valuable did you find them in preparing you for the tour? (1=Not Valuable, 5=Extremely Valuable)"
                            value="Very Satisfied"
                            onChange={handleChange}
                            checked={data.satisfactionTour === "Very Satisfied"}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="question">
                      <h3>3</h3>
                      <span>
                        Were there any specific topics or information covered in
                        the monthly sessions that you found particularly helpful
                        or that you believe could be improved in the future?
                      </span>
                    </div>
                    <div className="textarea">
                      <textarea
                        type="text"
                        id="sessionImprovement"
                        placeholder="Please share your thoughts..."
                        onChange={handleChange}
                        name="Were there any specific topics or information covered in the monthly sessions that you found particularly helpful or that you believe could be improved in the future?"
                        value={data.sessionImprovement}
                        rows={3}
                        cols={35}
                        style={{
                          border: "1px solid black",
                          borderRadius: "5px",
                        }}
                        required
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div>

              <h1>Meetings at Akasaka Intercity AIR:</h1>
              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    If you attended meetings at Akasaka Intercity AIR, please share your feedback on the experience. Were there any aspects of the meeting facilities, services, or organization that you found particularly positive or negative? Additionally, do you have any suggestions on how we can improve the meeting experience at Akasaka Intercity AIR?
                  </span>
                </div>

                <div className="textarea">
                  <textarea
                    type="text"
                    id="akasakaAIR"
                    placeholder="Please provide details..."
                    rows={3}
                    cols={35}
                    onChange={handleChange}
                    name="If you attended meetings at Akasaka Intercity AIR, please share your feedback on the experience. Were there any aspects of the meeting facilities, services, or organization that you found particularly positive or negative? Additionally, do you have any suggestions on how we can improve the meeting experience at Akasaka Intercity AIR?"
                    value={data.akasakaAIR}
                    style={{ border: "1px solid black", borderRadius: "5px" }}
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <h1>Overall Experience:</h1>

              <div>
                <div className="question">
                  <h3>1.</h3>
                  <span>
                    On a scale of 0 to 5, with 0 being extremely dissatisfied and 5 being extremely satisfied, how would you rate your overall experience on the innovation tour? (0 = Extremely Dissatisfied, 5 = Extremely Satisfied)
                  </span>
                </div>

                <div className="radio">
                  <div>
                    <label>
                      1
                      <input
                        type="radio"
                        id="overAll"
                        name="On a scale of 0 to 5, with 0 being extremely dissatisfied and 5 being extremely satisfied, how would you rate your overall experience on the innovation tour? (0 = Extremely Dissatisfied, 5 = Extremely Satisfied)"
                        value="Very Dissatisfied"
                        onChange={handleChange}
                        checked={data.overAll === "Very Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      2
                      <input
                        type="radio"
                        id="overAll"
                        name="On a scale of 0 to 5, with 0 being extremely dissatisfied and 5 being extremely satisfied, how would you rate your overall experience on the innovation tour? (0 = Extremely Dissatisfied, 5 = Extremely Satisfied)"
                        value="Dissatisfied"
                        onChange={handleChange}
                        checked={data.overAll === "Dissatisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      3
                      <input
                        type="radio"
                        id="overAll"
                        name="On a scale of 0 to 5, with 0 being extremely dissatisfied and 5 being extremely satisfied, how would you rate your overall experience on the innovation tour? (0 = Extremely Dissatisfied, 5 = Extremely Satisfied)"
                        value="Moderate"
                        onChange={handleChange}
                        checked={data.overAll === "Moderate"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      4
                      <input
                        type="radio"
                        id="overAll"
                        name="On a scale of 0 to 5, with 0 being extremely dissatisfied and 5 being extremely satisfied, how would you rate your overall experience on the innovation tour? (0 = Extremely Dissatisfied, 5 = Extremely Satisfied)"
                        value="Satisfied"
                        onChange={handleChange}
                        checked={data.overAll === "Satisfied"}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      5
                      <input
                        type="radio"
                        id="overAll"
                        name="On a scale of 0 to 5, with 0 being extremely dissatisfied and 5 being extremely satisfied, how would you rate your overall experience on the innovation tour? (0 = Extremely Dissatisfied, 5 = Extremely Satisfied)"
                        value="Very Satisfied"
                        onChange={handleChange}
                        checked={data.overAll === "Very Satisfied"}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onClick}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className=" feedbackContainer">
            <p className="submitText">
              Thank you for taking the time to complete this survey.
            </p>
          </div>
        )}
      </div>
      <Loader fullPage loading={isLoading} />
    </>
  );
}

export default Survey;
