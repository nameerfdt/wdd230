const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const card = document.createElement('section');
        const weekNumber = document.createElement('h4');
        weekNumber.textContent = `Week ${week.lesson}`;

        // Create a container for the links
        const linksContainer = document.createElement('div');

        // Iterate through each link in the week
        week.links.forEach((link, index) => {
            // Create an anchor element for the link
            const anchor = document.createElement('a');
            anchor.textContent = link.title;
            anchor.setAttribute('href', link.url);

            // Append the anchor to the container
            linksContainer.appendChild(anchor);

            // Add a separator if it's not the last link
            if (index < week.links.length - 1) {
                const separator = document.createElement('span');
                separator.textContent = ' | ';
                linksContainer.appendChild(separator);
            }
        });

        // Append the week number and links container to the card
        card.appendChild(weekNumber);
        card.appendChild(linksContainer);

        // Append the card to the activities section
        activities.appendChild(card);
    });
};
