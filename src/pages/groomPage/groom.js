import './index.css';
import config from '../../config/AssetPath';
import Introduction from '../introduction/Introduction';
import InvitationDetails from '../invitationDetails/InvitationDetails';
import RSVPDetails from '../rsvpDetails/RSVPDetails';
import { useEffect } from 'react';

function GroomPage() {
  useEffect(() => {
    document.title = "CraJiForYen's Wedding Invitation"
  }, []);

  const backgroundImageStyleOverride = {
    backgroundPosition: "calc(50% + 50px) 0px !important"
  } 

  const invitationStyleOverride = {
    position: "relative",
    paddingTop: "2.5em"
  };

  const rsvpStyleOverride = {
    marginBottom: '15em',
  }
  return (
    <>
      <style>{config.globalStyles()}</style>
      <div className="App">
        <Introduction imageVar={config.IMAGES.KEY.MAIN} backgroundStyle={backgroundImageStyleOverride}/>
        <InvitationDetails overrideStyle={invitationStyleOverride} targetDateStr={config.CONFIGURATION.GROOM.TARGET_DATE} imageVar={config.IMAGES.KEY.SECOND_GROOM} venueName={config.CONFIGURATION.GROOM.VENUE} venueAddress={config.CONFIGURATION.GROOM.VENUE_ADDRESS}/>
        <RSVPDetails overrideStyle={rsvpStyleOverride} rsvpLink={config.CONFIGURATION.GROOM.RSVP_LINK} imageVar={config.IMAGES.KEY.THIRD_GROOM}/>
      </div>
    </>
  );
};


export default GroomPage;
 