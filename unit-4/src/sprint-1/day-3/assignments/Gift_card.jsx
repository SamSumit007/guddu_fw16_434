import React from "react";
import Card_create from "./CreateCard";

const Amazon_card={

    date:"28/10/2020",
    study:"Case Study",
    gift_of:"Amazon Gift",
    pay:"Pay",
    background:"#ffa500",
    divices:"Desktop - Mobile",
    logo:"https://pngimg.com/uploads/amazon/amazon_PNG5.png",
    arrow:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAVFBMVEX///8AAADi4uJ+fn6RkZHa2tqMjIzf398hISEZGRklJSWkpKSHh4eBgYEcHBwEBATr6+vAwMDJycnQ0NAUFBTx8fFISEg4ODirq6txcXExMTEMDAx4EN5qAAABq0lEQVR4nO2bXU+DQBBF2VYrpQqttFbl//9PI5WkDC7GRHqPyT2PfbqdD+4yzBaFMcYYY4wxxpgxr+u39UEtYuA59bzfq4X0tM1FTtqu1FI+qdJADYhPm67Qx2d3Lad6QMlJSZ2vw1hOqY7PWE46iuMTspU6cT0/Bj2lOD6boCeJ62cd5Kj7/S7oacT5egp6tuL4xPpR+1fsL3U9x3zR6lntX7Hfa1h8trB+b8Txif2lrueJf8HquRSfN2I9d7D4HGH1oz6P4f0LVs+0fq9h8aH5l3qeYP+aJ+bL/jVm4l/i+Ni/5on185N/nXYvTfwLf0dTTX6azdfqvJyW75nzr/1U/eJU+6ycibXcgk1WjkJNStk61sg5/Q85sGTRShnW6LDHIM0klua3FrosrAMG6/jFOpyyju6swRzrtY/1UswaGbAGKqxxE2sYxxpV2qfysD4C2Kfy2KfysD7Nsn1Ku5YG9ylpbOxTeWIVa5etWKtorEU91hoja8kTtgIb1IgXhGHr07DlctjqPexiAuzaRtF2X2oYl1qGKz9nQmx6UBeijDHGGGOMMeb2fAD8MBQSigtySQAAAABJRU5ErkJggg=="
};
const Apple={

    date:"28 Sept 2020",
    study:"Case Study",
    gift_of:"Apple Gift",
    pay:"Payment",
    background:"#e4e4e4",
    divices:"MacOS - Mobile",
    logo:"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    arrow:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAVFBMVEX///8AAADi4uJ+fn6RkZHa2tqMjIzf398hISEZGRklJSWkpKSHh4eBgYEcHBwEBATr6+vAwMDJycnQ0NAUFBTx8fFISEg4ODirq6txcXExMTEMDAx4EN5qAAABq0lEQVR4nO2bXU+DQBBF2VYrpQqttFbl//9PI5WkDC7GRHqPyT2PfbqdD+4yzBaFMcYYY4wxxpgxr+u39UEtYuA59bzfq4X0tM1FTtqu1FI+qdJADYhPm67Qx2d3Lad6QMlJSZ2vw1hOqY7PWE46iuMTspU6cT0/Bj2lOD6boCeJ62cd5Kj7/S7oacT5egp6tuL4xPpR+1fsL3U9x3zR6lntX7Hfa1h8trB+b8Txif2lrueJf8HquRSfN2I9d7D4HGH1oz6P4f0LVs+0fq9h8aH5l3qeYP+aJ+bL/jVm4l/i+Ni/5on185N/nXYvTfwLf0dTTX6azdfqvJyW75nzr/1U/eJU+6ycibXcgk1WjkJNStk61sg5/Q85sGTRShnW6LDHIM0klua3FrosrAMG6/jFOpyyju6swRzrtY/1UswaGbAGKqxxE2sYxxpV2qfysD4C2Kfy2KfysD7Nsn1Ku5YG9ylpbOxTeWIVa5etWKtorEU91hoja8kTtgIb1IgXhGHr07DlctjqPexiAuzaRtF2X2oYl1qGKz9nQmx6UBeijDHGGGOMMeb2fAD8MBQSigtySQAAAABJRU5ErkJggg=="
}



const GiftCard=()=>{
    return (
        <>
        <Card_create {...Amazon_card} />
        <Card_create {...Apple} />
        
        </>
    )
}

export default GiftCard;