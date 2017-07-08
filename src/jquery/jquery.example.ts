
/**
 * Initialize the button that will change the title of the current page.
 * @param newTitle The new title to show.
 */
export function changeTitleAction(newTitle: string) {

    $('button').click((jqueryEvent) => {
        $('h1').text(newTitle);
        // jqueryEvent.
    });

}