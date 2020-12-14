import _ from "lodash"

export function Paginator (items, pageNumber, pageSize ) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}