<?php

namespace TinyIB\Repository;

class SQLHelper
{
    /**
     * @param array $conditions
     *
     * @return string
     */
    protected static function createWhereGroup($conditions)
    {
        if (isset($conditions['#op'])) {
            $op = $conditions['#op'];
            unset($conditions['#op']);
        } else {
            $op = 'AND';
        }

        $conditions = array_map(function ($key, $value) {
            if (is_array($value)) {
                if (is_numeric($key)) {
                    $subGroup = static::createWhereGroup($value);
                    return "($subGroup)";
                } elseif (isset($value['#op'])) {
                    $op = $value['#op'];
                    return "($key $op ?)";
                }
            }

            return "($key = ?)";
        }, array_keys($conditions), array_values($conditions));

        return implode(" $op ", $conditions);
    }

    /**
     * @param array $conditions
     *
     * @return string
     */
    public static function createWhereClause($conditions)
    {
        if (empty($conditions)) {
            return '';
        }

        return ' WHERE ' . static::createWhereGroup($conditions);
    }

    /**
     * @param array $conditions
     *
     * @return array
     */
    public static function createWhereParams($conditions)
    {
        $params = [];

        array_walk_recursive($conditions, function ($value, $key) use (&$params) {
            if ($key !== '#op') {
                $params[] = $value;
            }
        });

        return $params;
    }

    /**
     * @param string|null $order
     *
     * @return string
     */
    public static function createOrderByClause($order)
    {
        return $order !== null ? " ORDER BY $order" : '';
    }
}
