import React from "react";

import '../css/displayTransaction.css'

function DisplayTransaction (props) {
    return (
        <div>
            {props.list.map((item) => (
                <div key={item.id}>

                    {item.transactionType == "Expense" ? (

                        <div className="transaction-item">
                           <div>
                               <h4 style={{paddingLeft:'10px', paddingTop: '25px'}}>{item.item}</h4>
                               </div>
                           <div>
                               <h4 style={{paddingLeft:'10px', paddingTop: '25px'}}>R{item.amount}</h4>
                           </div>
                           <div className="expense-line"></div>

                       </div>

                    ) : (
                        <div className="transaction-item">
                            <div>
                                <h4 style={{paddingLeft:'10px', paddingTop: '25px'}}>{item.item}</h4>
                            </div>
                            <div>
                                <h4 style={{paddingLeft:'10px', paddingTop: '25px'}}>R{item.amount}</h4>
                            </div>
                            <div className="income-line"></div>

                        </div>

                    ) 

                    }
                  
                </div>
            ))}
        </div>

    );

}

export default DisplayTransaction;