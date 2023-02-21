export default {
    name: "patients",
    "type": "document",
    title: "Patients",
    fields: [
        {
            name: "name",
            title: "Name",
            description: "Name of the Patient",
            type: "string"
        },
        {
            name: "image",
            description: "Image of the Patient",
            type: "image",
            title: "Image"
        },
        {
            name: "date",
            type: "date",
            title: "Date"
        },
        {
            name: "description",
            title: "Small Description About the Patient",
            title: "Description",
            type: "string"
        },
        {
            name: "priority",
            type: "boolean",
            title: "Priority"
        },
        {
            name: "treatmentComplete",
            type: "boolean",
            title: "Treatment Complete"
        },
        {
            name: "amountRequired",
            type: "number",
            title: "Amount Required"
        },
        {
            name: "donationInfo",
            type: "string",
            title: "Donation Info"
        },
        {
            name: "information",
            type: "markdown",
            title: "Information"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description: "A Unique Slug"
        }
    ]
}