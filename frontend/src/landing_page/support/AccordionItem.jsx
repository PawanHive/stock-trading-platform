import React from 'react';

function AccordionItem({ topic }) { // topic prop desturcture in function parameter
  return (
    <div className="border  mb-3">
      <h3 className='accordion-header'>
        <button
          className='accordion-button collapsed gap-3'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${topic.id}`}
        >
          <i className={`bi ${topic.icon} text-primary fs-5`}></i>
          <span className="fw-semibold">{topic.label}</span>
        </button>
      </h3>

      <div id={topic.id} className="accordion-collapse collapse">
        <div className="accordion-body text-muted">
          <ul>
            {
              topic.links.map((link,i) => (
                <li className='py-2'>
                  <a href="" className='text-decoration-none'>{link}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;