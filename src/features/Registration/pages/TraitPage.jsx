import { Form } from "formik";
import React from "react";
import QuestionareHeader from "./../components/QuestionareHeader";
import FormButton from "./../components/FormButton";
import FormCheckboxItem from "../components/FormCheckboxItem";

const TraitPage = () => {
    return (
        <div className="h-full max-h-screen bg-beige w-full flex flex-col overflow-hidden">
            <QuestionareHeader
                label="To help you
                we have to know 
                "
                title="What you’re going through"
                sidenote="All of this information will be anonymous"
            />
            <div className="flex-1 flex flex-wrap overflow-y-scroll p-4 gap-4">
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
                <FormCheckboxItem label={"Anxiety attacks"} />
            </div>
            <div className="p-4">
                <FormButton label="Let’s talk about something nice now" />
            </div>
        </div>
    );
};

export default TraitPage;
