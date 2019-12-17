module.exports = {
    events : {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.events[event] = typeof(this.events[event]) != typeof([])? [] : this.events[event];
        this.events[event].push({
            subscriber,
            handler
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if(this.events[event]){
            let out = [];
            this.events[event].forEach((value, index)=>{
                if(value.subscriber != subscriber)
                    out.push(value);
            });
            this.events[event] = out;
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if(this.events[event]){
            for(let value of this.events[event])
                value.handler.call(value.subscriber);
        }
        return this;
    }
};
