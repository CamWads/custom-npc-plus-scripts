function commandParser(player, message) {
    var parts = message.substring(1).split(' ');
    var command = parts[0];
    var args = parts.slice(1);

    try {
        switch (command) {
            case 'a':
            case 'admin':
                admin(player, args);
                break;
            case 'b':
            case 'broadcast':
                broadcast(player, args);
                break;
            case 'ce':
            case 'cleareffect':
                cleareffect(player, args);
                break;
            case 'k':
            case 'kill':
                kill(player, args);
                break;
            case 'n':
            case 'nick':
                nick(player, args);
                break;
            case 'p':
            case 'ping':
                ping(player, args);
                break;
            case 'r':
            case 'reload':
                reload(player, args);
                break;
            case 'ride':
                ride(player, args);
                break;
            case 'tp':
            case 'teleport':
                teleport(player, args);
                break;
            case 'v':
            case 'vanish':
                vanish(player, args);
                break;
            default:
                player.sendMessage(STYLE_FAILURE + 'Unknown command');
                break;
        }
    } catch(exception) {
        if(typeof exception !== "string") { throw exception; }
        switch(exception) {
            case 'invalid_usage':
                player.sendMessage(STYLE_FAILURE+"Invalid usage of ?"+command);
                return;
            case 'invalid_player':
                player.sendMessage(STYLE_FAILURE+'Invalid player');
                return;
            default:
                throw exception;
        }
    }
}