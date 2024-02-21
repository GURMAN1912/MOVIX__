import React from 'react'
import './styles.scss'

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
export default function Error() {
  return (
    <div className="pageNotFound">
        <ContentWrapper>
            <span className="bigText">404</span>
            <span className="smallText">Page not found!</span>
        </ContentWrapper>
    </div>
);
}





