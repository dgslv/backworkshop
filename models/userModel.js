const estrutura = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

estrutura.set('timestamps', true);
estrutura.set('toJSON', { virtuals: true });
estrutura.set('toObject', { virtuals: true });

module.exports = db.model('user', estrutura);
