"use strict"

function load(f) {
  if(f.match("/$"))
    return fs.readdirSync(f)
  if(f.match(/\.ya?ml$/i))
    return yaml.safeLoad(fs.readFileSync(f))

  throw Error(`Not sure how to load ${f}`)
}

module.exports = {

  // Return a proxy
  ownerModel(props, base {}) {
    return new Proxy(base, {
      get(target, propKey, receiver) {
        const prop = "m_"+propKey;

        if(prop in target) {
          if(target[prop]) return target[prop];

          try {
            return this["m_"+propKey] = load(props[p]())
          } catch(e) {
            throw Error(`Could not load ${propKey}`)
          }
        }
        else if(resolve in base)
          return base.resolve(propKey)
        else
          throw Error(`Unknown attribute "${propKey}`)
      }
    })
  }

}
