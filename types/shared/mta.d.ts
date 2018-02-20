declare namespace MTA {
    function addCommandHandler(commandName: string, handlerFunction: Function, restricted?: false, caseSensitive?: true): boolean

    function addCommandHandler(commandName: string, handlerFunction: Function, caseSensitive?: true): boolean

    function outputDebugString(text: string, level?: number, red?: number, green?: number, blue?: number): boolean
}