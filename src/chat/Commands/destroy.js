function destroy(player, args) {
    switch(args.length) {
        case 0:
            var block = player.getLookingAtBlock(5);
            if(block) { block.remove(); }
            return;
        default:
            throw 'invalid_usage';
    }
}