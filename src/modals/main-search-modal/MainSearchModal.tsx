import React, { useState, useEffect } from "react";
import "./main-search-modal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GrClose } from "react-icons/gr";
import { GoCalendar } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

// events
import events from "./events";

const style = {
  position: "absolute" as "absolute",
  top: "27rem",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
  overflowY: "scroll",
  height: "70vh",
  "@media (max-width: 1036px)": {
    width: "96%",
  },
};

const MainSearchModal = ({ open, handleClose }: any) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredEvents = events.filter((event: any) => {
    return event.band_name.toLowerCase().includes(searchText.toLowerCase());
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="main-search-modal-inner-container">
          <h3 id="main-search-modal-title">
            Search Events... <GrClose id="close-icon" onClick={handleClose} />
          </h3>
          {loading ? (
            <>
              <div className="search-container">
                <BsSearch id="search-icon" />
                <input
                  autoFocus={true}
                  type="text"
                  placeholder="search by name..."
                  value={searchText}
                  onChange={handleInputChange}
                />
              </div>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event: any, index: any) => {
                  return (
                    <div key={index} className="events-card">
                      <img src={event.image} />
                      <div className="events-card-info">
                        <p>{event.band_name}</p>
                        <p>
                          <GoCalendar />
                          &nbsp;{event.start_date}
                        </p>
                        <p>
                          <GoCalendar />
                          &nbsp;{event.end_date}
                        </p>
                        <p>{event.hall_name}</p>
                        <button>BUY TICKET</button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-events-found">
                  <div className="no-events-found-inner-container">
                    <AiFillCloseCircle size={40} />
                    <p>No events found. </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <h1 className="loading-text">Loading... </h1>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default MainSearchModal;
