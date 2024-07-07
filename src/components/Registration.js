import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const RegistrationForm = () => {
  // State variables for form fields and errors
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    usernameError: "",
    emailError: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset specific error messages on input change
    if (name === "username") {
      setFormErrors({
        ...formErrors,
        usernameError: "",
      });
    } else if (name === "email") {
      setFormErrors({
        ...formErrors,
        emailError: "",
      });
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;

    // Username validation
    if (formData.username.trim().length === 0) {
      setFormErrors({
        ...formErrors,
        usernameError: "First Name is missing",
      });
      isValid = false;
    } else if (
      formData.username.trim().length < 3 ||
      formData.username.trim().length > 100
    ) {
      setFormErrors({
        ...formErrors,
        usernameError: "Length of First Name must be between 3 and 100",
      });
      isValid = false;
    }

    // Email validation
    const emailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (!emailRegex.test(formData.email)) {
      setFormErrors({
        ...formErrors,
        emailError: "Your email must be a valid email",
      });
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission (e.g., send data to server)
      console.log("Form submitted:", formData);
      // Reset form after submission if needed
      setFormData({
        username: "",
        email: "",
      });
    } else {
      // Form validation failed, do something (e.g., show error messages)
      console.log("Form validation failed");
    }
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card card-registration my-4">
            <div className="card-body p-md-5 text-black">
              <h3 className="mb-5 text-uppercase text-center">
                Student registration form
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label">First name</label>
                      {formErrors.usernameError && (
                        <h5 style={{ color: "red" }}>
                          {formErrors.usernameError}
                        </h5>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="mothername"
                        value={formData.mothername}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="fathername"
                        value={formData.fathername}
                        onChange={handleInputChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Father's name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender:</h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="form-select form-select-lg">
                      <option value="">State</option>
                      <option value="Andhra Pradesh">Andra Pradesh</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Telangana">Telangana</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="form-select form-select-lg">
                      <option value="">City</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Vizag">Vizag</option>
                    </select>
                  </div>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="text"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">DOB</label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Pincode</label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">College Name</label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Course</label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-control form-control-lg ${
                      formErrors.emailError ? "is-invalid" : ""
                    }`}
                    required
                  />
                  <label className="form-label">Email ID</label>
                  {formErrors.emailError && (
                    <small className="form-text text-muted invalid-feedback">
                      {formErrors.emailError}
                    </small>
                  )}
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="submit" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
