import todo from './todo'

const todoProject = () => {
    return `
    <div>
    <ul>${todo()}</ul>
    </div>
    `
}

export default todoProject