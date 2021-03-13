import React from 'react';
import AccountInfo from "./AccountInfo";
import Journal from "./Journal";

function ContentScreen() {
    return (
        <main className="content-screen">
            <div className="container">
                <AccountInfo />
                <Journal />
            </div>
        </main>
    );
}

export default ContentScreen;