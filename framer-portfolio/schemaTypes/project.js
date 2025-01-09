
export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: "image",
            type: "image",
            title: "Image"
        },
        {
            name: "link",
            type: "string",
            title: "Link"
        },
        {
            name: "technologies",
            type: "array",
            title: "Technologies",
            of: [{ type: "string" }]
        }
    ]
};

