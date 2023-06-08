import React, { useState } from "react";
import "./Quote.css";

function CreateQuote() {
    const [quotes, setQuotes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newQuote, setNewQuote] = useState("");
    const [sortOrder, setSortOrder] = useState("creation");
    
    const handleAddQuote = () => {
        setShowPopup(true);
    };

    const handleCreateQuote = () => {
        if (newQuote.trim() !== "") {
        setQuotes([newQuote, ...quotes]);
        setNewQuote("");
        setShowPopup(false);
        }
    };

    const handleRemoveQuote = () => {
        if (quotes.length > 0) {
        const updatedQuotes = [...quotes];
        updatedQuotes.shift();
        setQuotes(updatedQuotes);
        }
    };

    const handleSortOrder = (order) => {
        setSortOrder(order);
    };

    const sortedQuotes = [...quotes];
    if (sortOrder === "alphabetical") {
        sortedQuotes.sort();
    }

    return (
        <div className="quote-container">
            <button className="add-button" onClick={handleAddQuote}>
                +
            </button>
            <button className="remove-button" onClick={handleRemoveQuote}>
                -
            </button>
            <button onClick={() => handleSortOrder("creation")} className="sort-action">
                Tri par création
            </button>
            <button onClick={() => handleSortOrder("alphabetical")} className="sort-abc">
                Tri alphabétique
            </button>
            {sortedQuotes.map((quote, index) => (
                <div className="quote-item" key={index}>
                    <p>{quote}</p>
                </div>
            ))}
            {showPopup && (
                <div className="popup">
                <textarea
                    placeholder=" Créer une Citation"
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                ></textarea>
                <button className="create-button" onClick={handleCreateQuote}>
                    Créer une Citation
                </button>
                </div>
            )}
        </div>
    );
}

export default CreateQuote;
