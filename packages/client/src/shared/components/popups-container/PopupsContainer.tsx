import React from "react";
import {PopupContext, usePopups} from "@shared/hooks/usePopups";
import {Popup} from "@shared/components";

export const PopupsContainer: React.FC = () => {
  const {popups, closePopup} = usePopups();

  return <div style={{
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  }}>
    {popups.length > 0 && popups.map((args, i) =>
      <PopupContext.Provider value={{ name: args.props.name, closePopup: () => closePopup(args.props.name)}}>
        <Popup {...args} key={args.props.name}/>
      </PopupContext.Provider>
    )}
  </div>;
}
