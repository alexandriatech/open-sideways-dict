import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import xIcon from "assets/x.svg";
import Icon from "components-shared/Icon";

const Tag = ({ onClick, tag, index }) => (
  <div className={styles.tag}>
    {tag}
    <Icon
      src={xIcon}
      width={"16px"}
      className={styles.xClose}
      onClick={() => onClick({ tag, index })}
    />
  </div>
);

const InputTag = ({
  className,
  maxTags,
  name,
  onChange,
  tags,
  ...otherProps
}) => {
  const _className = classNames(className, styles.input);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const removeTag = ({ index }) => {
    const _tags = [...tags];
    _tags.splice(index, 1);
    onChange(_tags);
  };

  const addTag = () => {
    const _inputValue = inputValue.trim();
    if (!tags.includes(_inputValue) && _inputValue.length) {
      const _tags = [...tags];
      _tags.push(_inputValue);
      onChange(_tags);
    }
    setInputValue("");
  };

  return (
    <label className={_className} htmlFor={name}>
      {name}
      <div className={styles.inputTag} onClick={() => inputRef.current.focus()}>
        {tags.map((tag, i) => (
          <Tag key={tag} index={i} tag={tag} onClick={removeTag} />
        ))}
        <input
          className={classNames({ [styles.hide]: tags.length >= maxTags })}
          ref={inputRef}
          value={inputValue}
          onChange={(e) =>
            !(tags.length >= maxTags) && setInputValue(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (!(tags.length >= maxTags)) addTag();
            } else if (
              (e.keyCode === 46 || e.keyCode === 8) &&
              !inputValue.length
            )
              removeTag({ index: tags.length - 1 });
          }}
        ></input>
      </div>
    </label>
  );
};

InputTag.propTypes = {
  className: PropTypes.string,
  maxTags: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default InputTag;
