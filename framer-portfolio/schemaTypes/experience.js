
export default {
    name: 'experience',
    type: 'document',
    title: 'Experience',
    fields: [
        {
            name: 'year',
            type: 'string',
            title: 'Year'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: "role",
            type: "string",
            title: "Role"
        },
        {
            name: "company",
            type: "string",
            title: "Company"
        },
        {
            name: "technologies",
            type: "array",
            title: "Technologies",
            of: [{ type: "string" }]
        }
    ]
};

